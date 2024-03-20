// Import the Express framework
const express = require('express')
// Create a router object using Express Router
const router = express.Router()
// Import controller functions from 'level.controller' file
const {
    getSingle,
    getAll,
    createNew,
    deleteSinle,
    updateDocument,
    filterWithCourseId
} = require('./level.controller')

// Define routes

//Get all 
router.get('/',getAll)  // Route to get all documents

router.get('/course/:courseID',filterWithCourseId)// Route to get documents filtered by course ID

// Route to get a single document by its ID
router.get('/:id',getSingle)

//Get a by unit id

//POST a new document
router.post('/', createNew) // Route to create a new document

//Delete a  document
router.delete('/:id', deleteSinle) // Route to delete a document by its ID

//Update a document
router.patch('/:id',updateDocument) // Route to update a document by its ID

// Export the router object to be used in the application
module.exports = router;