// importing dependancies to setup store to store values
import { combineReducers, configureStore} from '@reduxjs/toolkit';

// call reducers
import questionReducer from './questionReducer';
import { resultReducer } from './resultReducer';

// combining reducers with combineReducers function 
const rootReducer = combineReducers({
    // initializing questions property with questionReducer
    questions: questionReducer,
    // initializing result property with resultReducer
    // result: resultReducer
})

// create store with reducer
export default configureStore({ reducer : rootReducer})