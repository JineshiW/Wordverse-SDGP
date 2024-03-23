// Importing the questionSchema and resultSchema models
import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";

// Importing questions and answers data
import questions, {answers} from "../database/data.js";

// Route handler to get all questions
export async function getQuestions(req, res){
    try {
        // Finding all questions from the database
        const q = await Questions.find();
        // Sending the questions as a JSON response
        res.json(q);
    } catch (error) {
        // Sending error message as JSON response if an error occurs
        res.json({ error: error.message });
    }
}

// Route handler to insert all questions
export async function insertQuestions(req, res){
    try {
        // Inserting questions and answers data into the database
        await Questions.insertMany({ questions, answers });
        // Sending success message as JSON response
        res.json({ msg: "Data Saved Successfully...!" });
    } catch (error) {
        // Sending error message as JSON response if an error occurs
        res.json({ error: error.message });
    }
}

// Route handler to delete all questions
export async function dropQuestions(req, res){
    try {
        // Deleting all questions from the database
        await Questions.deleteMany();
        // Sending success message as JSON response
        res.json({ msg: "Data Deleted Successfully...!" });
    } catch (error) {
        // Sending error message as JSON response if an error occurs
        res.json({ error: error.message });
    }
}

// Route handler to get all results
export async function getResult(req, res){
    try {
        // Finding all results from the database
        const r = await Results.find();
        // Sending the results as a JSON response
        res.json(r);
    } catch (error) {
        // Sending error message as JSON response if an error occurs
        res.json({ error: error.message });
    }
}

// Route handler to store a new result
export async function storeResult(req, res){
    try {
        // Extracting required fields from the request body
        const { username, result, attempts, points, achived } = req.body;
        // Checking if username and result are provided
        if (!username || !result) {
            throw new Error("Username and Result are required fields...!");
        }
        // Creating a new result document in the database
        await Results.create({ username, result, attempts, points, achived });
        // Sending success message as JSON response
        res.json({ msg: "Result Saved Successfully...!" });
    } catch (error) {
        // Sending error message as JSON response if an error occurs
        res.json({ error: error.message });
    }
}

// Route handler to delete all results
export async function dropResult(req, res){
    try {  
        // Deleting all results from the database
        await Results.deleteMany();
        // Sending success message as JSON response
        res.json({ msg: "Result Deleted Successfully...!" });
    } catch (error) {
        // Sending error message as JSON response if an error occurs
        res.json({ error: error.message });
    }
}
