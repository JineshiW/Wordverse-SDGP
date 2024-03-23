// Importing 'createSlice' from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit"

// Creating a Redux slice for managing questions state
export const questionReducer = createSlice({
    // Name of the slice
    name: 'questions', 
    // Initial state of the slice
    initialState :{
        // Array to store all the questions
        queue : [],
        // Array to store all the answers
        answers : [],
        // Index to track the current question
        trace : 0
    },
    // Reducer functions to handle state mutations
    reducers:{
        // Reducer function to start the exam with questions and answers
        startExamAction :(state, action)=>{
            // Destructuring question and answers from the payload of action
            let {question, answers}= action.payload
            // Return a new state object with updated queue and answers arrays
            return{
                ...state,
                queue: question,
                answers
            }
        },
        // Reducer function to move to the next question
        moveNextAction: (state)=>{
            // Increment the trace by 1 to move to the next question
            return{
                ...state,
                trace:state.trace+1
            }
        },
        // Reducer function to move to the previous question
        movePrevAction: (state)=>{
            // Decrement the trace by 1 to move to the previous question
            return{
                ...state,
                trace:state.trace-1
            }
        },
        // Reducer function to reset the state to initial values
        resetAllAction: ()=>{
            // Return a new state object with initial values for queue, answers, and trace
            return{
                queue : [],
                answers : [],
                trace : 0
            }
        }
    }
})

// Exporting action creators from the questionReducer slice
export const {startExamAction, moveNextAction, movePrevAction, resetAllAction} = questionReducer.actions;
// Exporting the reducer function from the questionReducer slice
export default questionReducer.reducer;
