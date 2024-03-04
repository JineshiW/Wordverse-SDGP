import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, {answers} from "../database/data.js";

// get all questions
export async function getQuestions(req, res){
    try {
        const q = await Questions.find();
        res.json(q);
    } catch (error) {
        res.json({ error: error.message }); // Sending error message
    }
}

// insert all questions
export async function insertQuestions(req, res){
    try {
        await Questions.insertMany({ questions, answers }); // Inserting data
        res.json({ msg: "Data Saved Successfully...!" });
    } catch (error) {
        res.json({ error: error.message }); // Sending error message
    }
}

// delete all questions
export async function dropQuestions(req, res){
    try {
        await Questions.deleteMany();
        res.json({ msg: "Data Deleted Successfully...!" });
    } catch (error) {
        res.json({ error: error.message }); // Sending error message
    }
}

// get all results
export async function getResult(req, res){
    try {
        const r = await Results.find();
        res.json(r);
    } catch (error) {
        res.json({ error: error.message }); // Sending error message
    }
}

// post all results
export async function storeResult(req, res){
    try {
        const { username, result, attempts, points, achieved } = req.body;
        if (!username || !result) {
            throw new Error("Username and Result are required fields...!");
        }

        await Results.create({ username, result, attempts, points, achieved });
        res.json({ msg: "Result Saved Successfully...!" });
    } catch (error) {
        res.json({ error: error.message }); // Sending error message
    }
}

// delete all results
export async function dropResult(req, res){
    try {  
        await Results.deleteMany();
        res.json({ msg: "Result Deleted Successfully...!" });
    } catch (error) {
        res.json({ error: error.message }); // Sending error message
    }
}

