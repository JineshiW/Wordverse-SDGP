// Require the Mongoose library
const mongoose = require('mongoose')

// Create a new Mongoose schema called courseSchema
const Schema = mongoose.Schema
const courseSchema = new Schema({
    // Define the courseName property of type String which is required
    courseName : {
        type: String,
        required: true
    },
    // Define the courseDescription property of type String which is required
    courseDescription : {
        type: String,
        required: true
    },
    // Define the courseImage property of type String which is required
    courseImage : {
        type: String,
        required: true
    }
}, { 
    // Enable timestamps for createdAt and updatedAt fields
    timestamps: true
})

// Export the Mongoose model for the course schema, named 'course'
module.exports = mongoose.model('course', courseSchema)
