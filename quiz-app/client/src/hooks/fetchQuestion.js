// Importing necessary hooks from React
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
// Importing a helper function to fetch data from the server
import { getServerData } from "../helper/helper"

// Importing Redux actions
import * as Action from '../redux/questionReducer'

// Custom hook to fetch questions from the server
export const useFetchQuestion =()=>{
    // Initializing useDispatch hook to dispatch actions
    const dispatch = useDispatch();
    // State to manage fetching status, API data, and server error
    const [getData, setGetData] = useState({isLoading: false, apiData: [], serverError: null})

    // useEffect to handle side effects (like data fetching)
    useEffect(() => {
        // Set loading state to true when fetching starts
        setGetData(prev => ({...prev, isLoading : true}));
    
        // Async function to fetch data from the server
        (async () => {
            try {
                // Fetching data from the backend server
                const [{questions,answers}] = await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`, (data)=>data)
                
                // If questions are available, update state, dispatch action
                if(questions.length > 0){
                    setGetData(prev => ({...prev, isLoading : false}));
                    setGetData(prev => ({...prev, apiData : questions}));
    
                    // Dispatching an action to start the exam with fetched questions and answers
                    dispatch(Action.startExamAction({question :questions,answers}))
                } else{
                    // Throw error if no questions are available
                    throw new Error("No Question Avalibale");
                }
            } catch (error) {
                // Handle errors and update state accordingly
                setGetData(prev => ({...prev, isLoading : false}));
                setGetData(prev => ({...prev, serverError : error}));
            }
        })();
    }, [dispatch]);
    
    // Return the state and function to update state
    return [getData, setGetData];
}

// Dispatch Functions for Moving Questions

// Action to move to the next question
export const MoveNextQuestion =()=> async(dispatch)=>{
    try{
        dispatch(Action.moveNextAction())
    }catch(error){
        console.log(error)
    }
}

// Action to move to the previous question
export const MovePrevQuestion =()=> async(dispatch)=>{
    try{
        dispatch(Action.movePrevAction())
    }catch(error){
        console.log(error)
    }
}
