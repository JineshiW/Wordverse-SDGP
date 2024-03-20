// Define an error handling middleware function with parameters: err, req, res, next
const errorHandler = (err, req, res, next) => {
  // Determine the status code to be sent in the response
  // If res.statusCode is available, use it; otherwise, default to 500 (Internal Server Error)
  const statusCode = res.statusCode ? res.statusCode : 500;

  // Set the status code of the response
  res.status(statusCode);

  // Send a JSON response with error details
  res.json({
    // Include the error message in the response
    message: err.message,
    // Include the error stack trace in the response, but only if the environment is not production
    // In production, stack traces are typically not exposed for security reasons
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
}

// Export the errorHandler middleware function to make it available for use in other parts of the application
module.exports = {
  errorHandler,
}
