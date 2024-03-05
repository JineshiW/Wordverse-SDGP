import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getServerData } from "../helper/helper"

// import redux actions 
import * as Action from '../redux/questionReducer'

// fetch question hook to fetch api data and set value to store
export const useFetchQuestion =()=>{
    // creating useDispatch hook function
    const dispatch =useDispatch();
    const [getData, setGetData] = useState({isLoading: false, apiData: [], serverError: null})

    // Creating useEffect hook function
    useEffect(() => {
        setGetData(prev => ({...prev, isLoading : true}));
    
        /** async function fetch backend data */
        (async () => {
            try {
                // getting data from the backend
                const [{questions,answers}] = await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`, (data)=>data)
                // console.log({questions,answers})
                if(questions.length > 0){
                    setGetData(prev => ({...prev, isLoading : false}));
                    setGetData(prev => ({...prev, apiData : questions}));
    
                    /** dispatch an action */
                    dispatch(Action.startExamAction({question :questions,answers}))
                } else{
                    throw new Error("No Question Avalibale");
                }
            } catch (error) {
                setGetData(prev => ({...prev, isLoading : false}));
                setGetData(prev => ({...prev, serverError : error}));
            }
        })();
    }, [dispatch]);
    

    

    return [getData, setGetData];
}

// MoveAction Dispatch Functions

// moveNextQuestion is increasing the tracevalue by 1 to travel forward to next question
export const MoveNextQuestion =()=> async(dispatch)=>{
    try{
        dispatch(Action.moveNextAction())
    }catch(error){
        console.log(error)
    }
}

// PrevAction Dispatch Function

// movePrevQuestion is decreasing the tracevalue by 1 to travel backward to previous question
export const MovePrevQuestion =()=> async(dispatch)=>{
    try{
        dispatch(Action.movePrevAction())
    }catch(error){
        console.log(error)
    }
}