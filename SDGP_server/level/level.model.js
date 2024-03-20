// Import the Mongoose library
const mongoose = require("mongoose");
// Destructure the Schema object from mongoose
const Schema = mongoose.Schema;
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("level", levelSchema);
