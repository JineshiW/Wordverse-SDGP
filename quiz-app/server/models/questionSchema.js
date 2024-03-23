// Importing the mongoose library for MongoDB operations
import mongoose from "mongoose";

// Destructuring Schema from mongoose
const {Schema} = mongoose;

// Defining the schema for the question model
const questionModel = new Schema({
    // Field for storing questions as an array, with a default empty array
    questions: { type: Array, default: [] },
    // Field for storing answers as an array, with a default empty array
    answers: { type: Array, default: [] },
    // Field for storing the creation date of the document, with a default value of the current date and time
    createdAt: { type: Date, default: Date.now }
});

// Creating and exporting the Question model based on the defined schema
export default mongoose.model('Question', questionModel);
