// Importing necessary modules
import express from 'express'; // Importing Express.js framework
import morgan from 'morgan'; // Importing Morgan for HTTP request logging
import cors from 'cors'; // Importing Cors for handling Cross-Origin Resource Sharing
import { config } from 'dotenv'; // Importing config function from dotenv for environment variables
import router from './router/route.js'; // Importing router from route.js file

// Importing the connect function from the conn.js file for database connection
import connect from './database/conn.js';

// Creating an instance of Express application
const app = express();

// Middleware setup
app.use(morgan('tiny')); // Setting up Morgan for HTTP request logging
app.use(cors()); // Setting up CORS middleware for Cross-Origin Resource Sharing
app.use(express.json()); // Parsing JSON requests
config(); // Configuring environment variables from .env file

// Defining the application port
const port = process.env.PORT || 8080; // Setting the port from environment variable or default to 8080

// Routes setup
app.use('/api', router); // Setting up routes with the router middleware for API endpoints

// Route for handling GET requests to the root URL
app.get('/', (req, res) => {
    try {
        // Sending a JSON response for the GET request
        res.json("Get Request");
    } catch (error) {
        // Sending an error response if an error occurs
        res.json(error);
    }
});

// Starting the server only when there is a valid database connection
connect().then(() => {
    try {
        // Starting the server to listen on the specified port
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`); // Logging server connection message
        });
    } catch (error) {
        console.log("Cannot connect to the server"); // Logging error message if server connection fails
    }
}).catch(error => {
    console.log("Invalid Database Connection"); // Logging error message if database connection fails
});
