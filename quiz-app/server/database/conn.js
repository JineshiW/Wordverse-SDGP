// Importing the mongoose library for MongoDB operations
import mongoose from "mongoose";

// Async function to establish a connection to the MongoDB database
export default async function connect(){
    // Waiting for mongoose to connect to the MongoDB database specified in the ATLAS_URI environment variable
    await mongoose.connect(process.env.ATLAS_URI)
    // Logging a success message to the console if the connection is established successfully
    console.log("Database Connected Successfully!")
}
