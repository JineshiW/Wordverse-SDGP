//Workout Model imported
const currentModel = require('./course.model')

const mongoose = require('mongoose')

// get all 
const getAll = async (req, res) => {
    const defaultTemModel = await currentModel.find({}).sort({ createdAt: -1 })

    res.status(200).json(defaultTemModel)

}




