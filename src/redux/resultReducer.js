import { createSlice } from "@reduxjs/toolkit"

// creating a function
export const resultReducer = createSlice({
    name: 'questions', 
    // creating an iitializer function to store objects 
    initialState :{
        // array to store all the questions
        queue : [],
        // array to store all the answers
        answers : [],
        trace : 0
    }
})