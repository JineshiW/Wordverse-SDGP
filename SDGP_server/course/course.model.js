const mongoose = require('mongoose')

const Schema = mongoose.Schema

const courseSchema = new Schema({
    courseName : {
        type: String,
        required: true
    },
    courseDescription : {
        type: String,
        required: true
    },
    courseImage : {
        type: String,
        required: true
    },

    
},  {timestamps:true})


module.exports = mongoose.model('course', courseSchema)