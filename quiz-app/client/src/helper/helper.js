// Importing the 'useSelector' hook from the 'react-redux' library,
// and the 'Navigate' component from the 'react-router-dom' library,
// as well as the 'axios' library for making HTTP requests.
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from 'axios'

// Function to count the number of attempts made by the user
export function attempts_Number(result){
    // Filter out any 'undefined' elements from the 'result' array,
    // then return the length of the filtered array.
    return result.filter(r => r !== undefined).length;
}

// Function to calculate the number of points earned by the user
export function earnPoints_Number(result, answers, point){
    // Map through the 'result' array, comparing each element with
    // the corresponding element in the 'answers' array.
    // Filter out elements where the user's answer matches the correct answer.
    // Map each matching element to the 'point' value.
    // Finally, reduce the resulting array to get the total points earned.
    return result.map((element, i) => answers[i] === element).filter(i => i).map(i => point).reduce((prev, curr) => prev + curr, 0);
}

// Function to flag the result based on total points and earned points
export function flagResult(totalPoints, earnPoints){
    // Check if the earned points are greater than or equal to 50% of the total points.
    // Return true if the condition is met, indicating success.
    return (totalPoints * 50 / 100) < earnPoints; /** earn 50% marks */
}

// Component to check if the user is authenticated
export function CheckUserExist({ children }){
    // Retrieve the 'userId' from the Redux store using 'useSelector'.
    // If 'userId' exists, render the 'children'; otherwise, redirect to '/'.
    const auth = useSelector(state => state.result.userId)
    return auth ? children : <Navigate to={'/'} replace={true}></Navigate>
}

// Function to fetch data from the server
export async function getServerData(url, callback){
    // Make a GET request to the specified 'url' using 'axios',
    // and extract the data from the response.
    const data = await (await axios.get(url))?.data;
    // If a 'callback' function is provided, call it with the retrieved data.
    // Otherwise, return the data.
    return callback ? callback(data) : data;
}

// Function to post data to the server
export async function postServerData(url, result, callback){
    // Make a POST request to the specified 'url' with the 'result' data using 'axios',
    // and extract the data from the response.
    const data = await (await axios.post(url, result))?.data;
    // If a 'callback' function is provided, call it with the retrieved data.
    // Otherwise, return the data.
    return callback ? callback(data) : data;
}
