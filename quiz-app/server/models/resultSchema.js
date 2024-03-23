// Importing the mongoose library for MongoDB operations
import mongoose from "mongoose";

// Destructuring Schema from mongoose
const { Schema } = mongoose;

// Defining the schema for the result model
const resultModel = new Schema({
    // Field for storing the username as a string
    username: { type: String },
    // Field for storing the result as an array, with a default empty array
    result: { type: Array, default: [] },
    // Field for storing the number of attempts as a number, with a default value of 0
    attempts: { type: Number, default: 0 },
    // Field for storing the total points as a number, with a default value of 0
    points: { type: Number, default: 0 },
    // Field for storing whether the result is achieved or not as a string, with a default empty string
    achived: { type: String, default: '' },
    // Field for storing the creation date of the document, with a default value of the current date and time
    createdAt: { type: Date, default: Date.now }
});

// Creating and exporting the Result model based on the defined schema
export default mongoose.model('result', resultModel);
