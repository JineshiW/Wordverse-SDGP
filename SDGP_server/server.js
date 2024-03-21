// Load environment variables from a .env file into process.env
require("dotenv").config();

// Import required modules
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");

// Import routes
const courseRoutes = require("./course/course.routes");
const levelRoutes = require("./level/level.routes");

// Create an Express application
const app = express();

// Middleware setup
// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Parse incoming request bodies in JSON format
app.use(express.json({ limit: "50mb" }));
app.use(express.json());

// Middleware to log requests (path and method)
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes setup
// Define routes for courses and levels
app.use("/api/course", courseRoutes);
app.use("/api/level", levelRoutes);

// Auth routes
// For authentication routes, e.g., user authentication
app.use("/api/auth", require("./auth/userRoutes"));

// Connect to MongoDB database
mongoose
  .connect(process.env.MONGO_URI) // Use the MongoDB connection string from environment variables
  .then(() => {
    // Start listening for requests after successfully connecting to the database
    app.listen(process.env.PORT, () => {
      console.log("Connected to DB & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error); // Log any errors that occur during database connection
  });

// Expose environment variables for the current process
process.env;
