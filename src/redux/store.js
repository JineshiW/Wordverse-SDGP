// importing dependancies to setup store to store values
import { combineReducers, configureStore} from '@reduxjs/toolkit';

// call reducers
import { questionReducer } from './questionReducer';

// creating reducer functions 
const rootReducer = combineReducers({
    // initializing questions property with questionReducer
    questions: questionReducer
})