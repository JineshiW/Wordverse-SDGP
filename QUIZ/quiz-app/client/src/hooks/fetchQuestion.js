import { useEffect, useState } from "react"
import data, {answers} from "../database/data"
import { useDispatch } from "react-redux"

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
                let question = await data;
         
                if(question.length > 0){
                    setGetData(prev => ({...prev, isLoading : false}));
                    setGetData(prev => ({...prev, apiData : {question, answers}}));

                    /** dispatch an action */
                    dispatch(Action.startExamAction({question, answers}))
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