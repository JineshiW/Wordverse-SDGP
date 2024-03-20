// Import the Mongoose library
const mongoose = require("mongoose");

// Destructure the Schema object from mongoose
const { Schema } = mongoose;

// Define the schema for the "level" collection
const levelSchema = new Schema(
  {
    // Define a field for the name of the level
    levelName: {
      type: String,    // Data type is String
      required: true,  // It's a required field
    },
    // Define a field for the textual material of the level
    levelMaterialTexts: {
      type: String,    // Data type is String
      required: true,  // It's a required field
    },
    // Define a field for the description of the level
    levelDescription: {
      type: String,    // Data type is String
      required: true,  // It's a required field
    },
    // Define a field for the image associated with the level
    levelImage: {
      type: Object,    // Data type is Object
      required: true,  // It's a required field
    },
    // Define a field for an array of material images associated with the level
    levelMaterialImage: {
      type: [],        // Data type is an Array
      required: true,  // It's a required field
    },
    // Define a field for referencing the ID of the course associated with the level
    courseID: {
      type: Schema.Types.ObjectId,  // Data type is ObjectId, referring to another document
      ref: "course",                // Reference to the "course" collection
      required: true,               // It's a required field
    },
  },
  { timestamps: true }  // Add timestamps for createdAt and updatedAt
);

// Create and export the Level model based on the defined schema
module.exports = mongoose.model("level", levelSchema);
