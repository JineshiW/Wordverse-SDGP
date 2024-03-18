//Workout Model imported
const currentModel = require('./course.model')

const mongoose = require('mongoose')

// get all 
const getAll = async (req, res) => {
    const defaultTemModel = await currentModel.find({}).sort({ createdAt: -1 })

    res.status(200).json(defaultTemModel)

}

// get a single 
const getSingle = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No Such Volunteer Job' })
    }
    const defaultTemModel = await currentModel.findById(id)

    if (!defaultTemModel) {
        return res.status(404).json({ error: 'No Such Volunteer Job' })

    }
    res.status(200).json(defaultTemModel)
}





