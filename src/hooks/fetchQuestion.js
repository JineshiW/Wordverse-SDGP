import { useEffect, useState } from "react"
import data from "../database/data"

// fetch question hook to fetch api data and set value to store
export const useFetchQuestion =()=>{
    const [getData, setGetData] = useState({isLoading: false, apiData: [], serverError: null})

    // Creating useEffect hook function
    useEffect(()=> {
        // update useState
        setGetData(prev => ({...prev, isLoading: true}))

        // async function to fetch the backend data
        (async ()=>{
            
        })
    })
}