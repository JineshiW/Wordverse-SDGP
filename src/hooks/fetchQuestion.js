import { useEffect, useState } from "react"
import data from "../database/data"
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
        const fetchData = async () => {
            setGetData(prev => ({ ...prev, isLoading: true }));
            try {
                let question = await data;
                if (question.length > 0) {
                    setGetData(prev => ({ ...prev, apiData: question, isLoading: false }));
                    dispatch(Action.startExamAction(question));
                } else {
                    throw new Error("No Question Available");
                }
            } catch (error) {
                setGetData(prev => ({ ...prev, isLoading: false, serverError: error }));
            }
        };
    
        fetchData();
    
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