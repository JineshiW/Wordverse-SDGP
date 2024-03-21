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

// Define an asynchronous function called createWithoutReqBodyCheck that takes req (request) and res (response) as parameters
const createWithoutReqBodyCheck = async (req, res) => {
    try {
        // Create a new document in the currentModel collection using the request body
        const defaultTemModel = await currentModel.create(req.body)
        // Send a JSON response with the created document and a status of 200 (OK)
        res.status(200).json(defaultTemModel)
    } catch (error) {
        // If an error occurs during document creation, send a 400 (Bad Request) error response with the error message
        res.status(400).json({ error: error.message })
    }
}

// Define an asynchronous function called createNew that takes req (request) and res (response) as parameters
const createNew = async (req, res) => {
    // Extract the name property from the request body
    const { name } = req.body;

    try {
        // Create a new document in the currentModel collection using the request body
        const defaultTemModel = await currentModel.create(req.body)
        // Send a JSON response with the created document and a status of 200 (OK)
        res.status(200).json(defaultTemModel);
    } catch (error) {
        // If an error occurs during document creation, send a 400 (Bad Request) error response with the error message
        res.status(400).json({ error: error.message });
    }
};

// Define an asynchronous function called deleteSinle that takes req (request) and res (response) as parameters
const deleteSinle = async (req, res) => {
    // Extract the id parameter from the request parameters
    const { id } = req.params

    // Check if the id is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        // If the id is not valid, return a 404 error response with a message indicating no such volunteer job
        return res.status(404).json({ error: 'No Such Volunteer Job' })
    }

    // Use findOneAndDelete to find and delete a document by its id
    const defaultTemModel = await currentModel.findOneAndDelete({ _id: id })

    // Check if the document with the specified id exists and was deleted
    if (!defaultTemModel) {
        // If the document does not exist or was not deleted, return a 400 error response with a message indicating no such volunteer job
        return res.status(400).json({ error: 'No Such Volunteer Job' })
    }

    // If the document exists and was deleted successfully, set the response status to 200 (OK) and send the deleted document as a JSON response
    res.status(200).json(defaultTemModel)
}

// Define an asynchronous function called updateDocument that takes req (request) and res (response) as parameters
const updateDocument = async (req, res) => {
    // Extract the id parameter from the request parameters
    const { id } = req.params

    // Check if the id is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        // If the id is not valid, return a 404 error response with a message indicating no such workout
        return res.status(404).json({ error: 'No Such Workout' })
    }

    // Use findByIdAndUpdate to find a document by its id and update it with the request body, setting the new option to true to return the updated document
    const defaultTemModel = await currentModel.findByIdAndUpdate({ _id: id }, {
        ...req.body
    }, { new: true })

    // Check if the updated document exists
    if (!defaultTemModel) {
        // If the updated document does not exist, return a 400 error response with a message indicating no such workout
        return res.status(400).json({ error: 'No Such Workout' })
    }

    // If the document is updated successfully, set the response status to 200 (OK) and send the updated document as a JSON response
    res.status(200).json(defaultTemModel)
}

// Export the functions to be used in other modules
module.exports = {
    getSingle,
    getAll,
    createNew,
    deleteSinle,
    updateDocument,
    createWithoutReqBodyCheck,
}


