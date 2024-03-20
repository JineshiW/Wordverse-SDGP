//Workout Model imported
const currentModel = require('./course.model')

const mongoose = require('mongoose')

//get all
// Define an asynchronous function called getAll that takes req (request) and res (response) as parameters
const getAll = async (req, res) => {
    // Use the currentModel to find all documents in the collection, sort them in descending order based on the createdAt field, and store the result in defaultTemModel
    const defaultTemModel = await currentModel.find({}).sort({ createdAt: -1 })

    // Set the response status to 200 (OK) and send defaultTemModel as a JSON response
    res.status(200).json(defaultTemModel)
}


