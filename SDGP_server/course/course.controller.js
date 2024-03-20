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

// Define an asynchronous function called getSingle that takes req (request) and res (response) as parameters
const getSingle = async (req, res) => {
    // Extract the id parameter from the request parameters
    const { id } = req.params

    // Check if the id is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        // If the id is not valid, return a 404 error response with a message indicating no such volunteer job
        return res.status(404).json({ error: 'No Such Volunteer Job' })
    }

    // Use the currentModel to find a document by its id
    const defaultTemModel = await currentModel.findById(id)

    // Check if the document with the specified id exists
    if (!defaultTemModel) {
        // If the document does not exist, return a 404 error response with a message indicating no such volunteer job
        return res.status(404).json({ error: 'No Such Volunteer Job' })
    }

    // If the document exists, set the response status to 200 (OK) and send the document as a JSON response
    res.status(200).json(defaultTemModel)
}


