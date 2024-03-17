// Import necessary modules and packages
require("dotenv").config(); // Loads environment variables from a .env file into process.env
const cors = require("cors"); // Cross-Origin Resource Sharing middleware
var bodyParser = require("body-parser"); // Parses incoming request bodies in a middleware before handlers

// Import Express framework
const express = require("express");

// Import Mongoose ORM for MongoDB
const mongoose = require("mongoose");

// Import routes for different resources
const courseRoutes = require("./course/course.routes"); // Course routes
const levelRoutes = require("./level/level.routes"); // Level routes

// Create an Express application instance
const app = express();

// Middleware setup
app.use(cors()); // Enables Cross-Origin Resource Sharing
app.use(express.json({ limit: "50mb" })); // Parses incoming JSON payloads with a limit of 50MB
app.use(express.json()); // Parses incoming JSON payloads
app.use((req, res, next) => { // Custom middleware to log request path and method
  console.log(req.path, req.method);
  next(); // Passes control to the next middleware
});

// Define routes for different resources
app.use("/api/course", courseRoutes); // Course routes
app.use("/api/level", levelRoutes); // Level routes
app.use("/api/auth", require("./auth/userRoutes")); // Authentication routes

// Connect to MongoDB database
mongoose
  .connect(process.env.MONGO_URI) // Connects to the MongoDB database using the URI specified in the environment variables
  .then(() => {
    // If the connection is successful, start the Express app
    app.listen(process.env.PORT, () => {
      console.log("connected to DB & listening on port", process.env.PORT); // Logs a message indicating successful connection and the port the server is listening on
    });
  })
  .catch((error) => {
    // If there's an error connecting to the database, log the error
    console.log(error);
  });

// Access environment variables
process.env;
