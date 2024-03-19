import { createSlice } from "@reduxjs/toolkit"

export const resultReducer = createSlice({
    name:'result',
    initialState:{
        userId:null,
        result:[]
    },

    reducers :{
        setUserId:(state, action)=> {
            // pass the value of the user and pass it to the userId
            state.userId= action.payload
        },
        pushResultAction:(state, action)=>{
            state.result.push(action.payload)
        },
        updateResultAction: (state, action) => {
            const {trace, checked}= action.payload
            // changes all elements from start to end index to static elements and return a modified array
            state.result.fill(checked, trace, trace + 1)
        },
        resetResultAction: () => {
            return {
                userId:null,
                result:[]
            }
        }
    }
})

export const {setUserId, pushResultAction, resetResultAction, updateResultAction} = resultReducer.actions;
export default resultReducer.reducer;