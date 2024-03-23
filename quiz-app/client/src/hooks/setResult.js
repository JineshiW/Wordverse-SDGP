// Importing a function to post data to the server from the helper file
import { postServerData } from '../helper/helper';
// Importing Redux actions related to result management
import * as Action from '../redux/resultReducer';

// Action to push the user's answer result to the Redux store
export const PushAnswer =(result)=> async(dispatch)=> {
    try{
        // Dispatching an action to push the result to the Redux store
        await dispatch(Action.pushResultAction(result))
    }catch(error){
        console.log(error)
    }
}

// Action to update the result in the Redux store based on index
export const updateResult = (index) => async (dispatch) =>{
    try {
        // Dispatching an action to update the result in the Redux store
        dispatch(Action.updateResultAction(index))
    }catch(error){
        console.log(error)
    }
}

// Function to publish the user's result to the server
export const usePublishResult= (resultData) =>{
    // Destructuring result and username from resultData object
    const {result, username}= resultData;

    // Immediately invoked async function to handle result publishing
    (async()=>{
        try {
            // Checking if result is not empty and username is provided
            if(result !== [] && !username) throw new Error("Couldn't get Result");
            // Posting the result data to the server
            await postServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, resultData, data => data)
        } catch (error) {
            console.log(error)
        }
    })();
}
