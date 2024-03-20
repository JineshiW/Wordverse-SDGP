import axios from "axios";

// Create an instance of Axios with custom configurations
const instance = axios.create({
  // Set the base URL for API requests
  // Change this baseURL based on the environment or API endpoint
  baseURL: "http://localhost:8000", // Local development server

  // baseURL: "https://api.apancollections.com", // Production API endpoint

  // Specify whether to include credentials (such as cookies) in CORS requests
  withCredentials: false,

  // Set custom headers for requests
  headers: {
    // Allow requests from any origin
    "Access-Control-Allow-Origin": "*",

    // Specify allowed HTTP methods
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",

    // Specify the accepted response format
    Accept: "multipart/form-data",
  },
});

// Export the custom Axios instance
export default instance;
