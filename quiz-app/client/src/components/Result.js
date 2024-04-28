import React, { useEffect } from "react"; // Importing React and its useEffect hook
import "../styles/Result.css"; // Importing CSS styles for the Result component
import { Link } from "react-router-dom"; // Importing the Link component from react-router-dom
import ResultTable from "./ResultTable"; // Importing the ResultTable component
import { useDispatch, useSelector } from "react-redux"; // Importing useDispatch and useSelector hooks from react-redux
import {
  attempts_Number,
  earnPoints_Number,
  flagResult,
} from "../helper/helper"; // Importing helper functions from '../helper/helper'

// Importing actions
import { resetAllAction } from "../redux/questionReducer"; // Importing resetAllAction from questionReducer
import { resetResultAction } from "../redux/resultReducer"; // Importing resetResultAction from resultReducer
import { usePublishResult } from "../hooks/setResult"; // Importing usePublishResult custom hook

export default function Result() { // Defining a functional component named Result
  const dispatch = useDispatch(); // Using useDispatch to get the dispatch function from Redux
  const {
    questions: { queue, answers }, // Destructuring queue and answers from state.questions
    result: { result, userId }, // Destructuring result and userId from state.result
  } = useSelector((state) => state); // Using useSelector to get state from Redux

  useEffect(() => { // Using useEffect hook to execute code after render
    console.log(flag); // Logging the flag variable to the console
  });

  const totalPoints = queue.length * 10; // Calculating the total points by multiplying the length of the queue by 10
  const attempts = attempts_Number(result); // Calculating the number of attempts using attempts_Number helper function
  const earnPoints = earnPoints_Number(result, answers, 10); // Calculating earned points using earnPoints_Number helper function
  const flag = flagResult(totalPoints, earnPoints); // Calculating the flag using flagResult helper function

  // Storing user result
  usePublishResult({ // Invoking usePublishResult custom hook to publish the result
    result,
    username: userId,
    attempts,
    points: earnPoints,
    achived: flag ? "Passed" : "Failed",
  });

  function onRestart() { // Function to handle restart button click
    dispatch(resetAllAction()); // Dispatching resetAllAction to reset all questions
    dispatch(resetResultAction()); // Dispatching resetResultAction to reset the result
  }

  return (
    <div className="container"> {/* Render a div with className 'container' */}
      <h1 className="title text-light">Quiz Game</h1> {/* Render the title of the quiz */}

      <div className="result flex-center"> {/* Render a div with className 'result flex-center' */}
        <div className="flex"> {/* Render a div with className 'flex' */}
          <span>Username</span> {/* Render the label 'Username' */}
          <span className="bold">{userId || "N/A"}</span> {/* Render the userId or 'N/A' if userId is falsy */}
        </div>
        {/* Render additional information about the result */}
        <div className="flex">
          <span>Total Quiz Points: </span>
          <span className="bold">{totalPoints || 0}</span>
        </div>
        <div className="flex">
          <span>Total Questions Answered: </span>
          <span className="bold">{queue.length || 0}</span>
        </div>
        <div className="flex">
          <span>Total Questions Attempted: </span>
          <span className="bold">{attempts || 0}</span>
        </div>
        <div className="flex">
          <span>Total Earned Points: </span>
          <span className="bold">{earnPoints || 0}</span>
        </div>
        <div className="flex">
          <span>Quiz Result: </span>
          <span
            style={{ color: `${flag ? "#2aff95" : "#ff2a66"}` }} // Change text color based on the flag value
            className="bold"
          >
            {flag ? "Passed" : "Failed"} {/* Display 'Passed' or 'Failed' based on the flag value */}
          </span>
        </div>
      </div>

      <div className="start"> {/* Render a div with className 'start' */}
        {/* Navigate user to restart the quiz */}
        <Link className="btn" to={"/mainQuiz"} onClick={onRestart}>Restart</Link> {/* Render a Link to restart the quiz */}
      </div>
      <div className="quit"> {/* Render a div with className 'quit' */}
        {/* Redirect user to a different page */}
        <Link className="btn" to={"https://wordverse-sdgp-main-client.vercel.app/service"}>End Quiz</Link> {/* Render a Link to end the quiz */}
      </div>
      <div className="progress"> {/* Render a div with className 'progress' */}
        {/* Redirect user to a different page */}
        <Link className="btn" to={"https://wordverse-sdgp-progresspage.vercel.app/"}>Check Your Achievements</Link> {/* Render a Link to check achievements */}
      </div>

      <div className="container"> {/* Render a div with className 'container' */}
        <ResultTable></ResultTable> {/* Render the ResultTable component */}
      </div>
    </div>
  );
}
