import { createSlice } from "@reduxjs/toolkit"

// creating a function
export const questionReducer = createSlice({
    name: 'questions', 
    // creating an iitializer function to store objects 
    initialState :{
        // array to store all the questions
        queue : [],
        // array to store all the answers
        answers : [],
        trace : 0
    },
    reducers:{
        startExamAction :(state, action)=>{
            return{
                // return initial state (...)
                ...state,
                queue: action.payload
            }
        },
        moveNextAction: (state)=>{
            return{
                ...state,
                trace:state.trace+1
            }
        },
        movePrevAction: (state)=>{
            return{
                ...state,
                trace:state.trace-1
            }
        },
        resetAllAction: ()=>{
            return{
                // array to store all the questions
                queue : [],
                // array to store all the answers
                answers : [],
                trace : 0
            }
        }
    }
})

export const {startExamAction, moveNextAction, movePrevAction, resetAllAction} =questionReducer.actions;
export default questionReducer.reducer;
