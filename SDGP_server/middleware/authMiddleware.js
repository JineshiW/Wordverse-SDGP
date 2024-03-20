// Import required modules and packages
const jwt = require('jsonwebtoken'); // JSON Web Token (JWT) library for Node.js
const asyncHandler = require('express-async-handler'); // Middleware to handle asynchronous functions
const User = require('../auth/userModel'); // Import the User model for database operations

// Define a middleware function named 'protect' to authenticate and authorize users
const protect = asyncHandler(async (req, res, next) => {
  let token; // Variable to store the JWT extracted from the request header

  // Check if the Authorization header is present and starts with 'Bearer'
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Extract the token from the Authorization header (format: 'Bearer <token>')
      token = req.headers.authorization.split(' ')[1];

      // Verify the authenticity of the token using the JWT_SECRET stored in the environment variables
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Find the user associated with the decoded user ID from the token
      // Exclude the user's password from the returned document
      req.user = await User.findById(decoded.id).select('-password');

      next(); // Call the next middleware function in the chain
    } catch (error) {
      // If an error occurs during token verification or user retrieval, log the error
      console.log(error);

      // Set the response status code to 401 (Unauthorized)
      res.status(401);

      // Throw an error to be caught by the error handling middleware
      throw new Error('Not authorized');
    }
  }

  // If no token is found in the Authorization header
  if (!token) {
    // Set the response status code to 401 (Unauthorized)
    res.status(401);

    // Throw an error to be caught by the error handling middleware
    throw new Error('Not authorized, no token');
  }
});

// Export the 'protect' middleware function to make it available for use in other parts of the application
module.exports = { protect };
