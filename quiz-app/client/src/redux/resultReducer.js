// Importing 'createSlice' from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit"

// Creating a Redux slice for managing result state
export const resultReducer = createSlice({
    // Name of the slice
    name:'result',
    // Initial state of the slice
    initialState:{
        userId:null, // Initially, userId is null
        result:[]    // Initially, result is an empty array
    },

    // Reducer functions to handle state mutations
    reducers :{
        // Reducer function to set the userId in the state
        setUserId:(state, action)=> {
            // Update the state with the payload value of action
            state.userId= action.payload
        },
        // Reducer function to push a new result to the result array in the state
        pushResultAction:(state, action)=>{
            // Push the payload value of action to the result array in the state
            state.result.push(action.payload)
        },
        // Reducer function to update a result in the result array based on trace and checked values
        updateResultAction: (state, action) => {
            // Destructure trace and checked values from the payload of action
            const {trace, checked}= action.payload
            // Fill the result array with 'checked' value from 'trace' index to 'trace + 1' index
            state.result.fill(checked, trace, trace + 1)
        },
        // Reducer function to reset the result state to initial state
        resetResultAction: () => {
            // Return the initial state object
            return {
                userId:null,
                result:[]
            }
        }
    }
})

// Exporting action creators from the resultReducer slice
export const {setUserId, pushResultAction, resetResultAction, updateResultAction} = resultReducer.actions;
// Exporting the reducer function from the resultReducer slice
export default resultReducer.reducer;
