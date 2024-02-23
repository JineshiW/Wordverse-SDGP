// Importing required dependencies
 
const cors = require('cors'); // CORS Middleware for express
const express = require('express'); // Express.js framework
const mongoose = require('mongoose'); // Mongoose library for MongoDB
const FormDataModel = require ('./models/FormData'); // // Custom model for MongoDB collection


const app = express(); // Create an instance of the Express application

app.use(express.json()); // Parse incoming request bodies in JSON format
app.use(cors()); // Enable CORS for the Express server


// Connect to MongoDB database named 'practice_mern' running locally on port 27017
mongoose.connect('mongodb://127.0.0.1:27017/practice_mern'); 

// Endpoint for user registration
app.post('/register', (req, res)=>{
    // To post / insert data into database

    // Extract email and password from request body

    const {email, password} = req.body;

    // Find user with the provided email in the database

    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            // If user with the provided email already exists, send back "Already registered" response
            res.json("Already registered")
        }
        else{
            // If user does not exist, create a new user record in the database
            FormDataModel.create(req.body)
            .then(log_reg_form => res.json(log_reg_form)) // Send back the created user record
            .catch(err => res.json(err)) // Handle potential errors
        }
    })
    
})

// Endpoint for user login
app.post('/login', (req, res)=>{
    // To find record from the database

    // Extract email and password from request body
    const {email, password} = req.body;

    // Find user with the provided email in the database
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            // If user found then these 2 cases
            if(user.password === password) {
                // If passwords match, send back "Success" response
                res.json("Success");
            }
            else{
                // If passwords does not match, send back "Wrong password" response
                res.json("Wrong password");
            }
        }
        // If user not found then 
        else{
            res.json("No records found! ");
        }
    })
})

// Start the server and listen on port 3001
app.listen(3001, () => {
    console.log("Server listining on http://127.0.0.1:3001");

});