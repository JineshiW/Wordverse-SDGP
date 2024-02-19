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
        }
    }
})

export const {setUserId} = resultReducer.actions;
export default resultReducer.reducer;