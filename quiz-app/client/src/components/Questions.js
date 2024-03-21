import React, { useEffect, useState } from "react"; // Importing React and its hooks (useEffect, useState)
import { useDispatch, useSelector } from "react-redux"; // Importing react-redux hooks (useDispatch, useSelector)

// importing custom hook
import { useFetchQuestion } from "../hooks/fetchQuestion"; // Importing a custom hook for fetching questions
import { updateResult } from "../hooks/setResult"; // Importing a custom hook for updating the result

export default function Questions({ onChecked }) { // Defining a functional component named Questions with props onChecked
  const [checked, setChecked] = useState(undefined); // Declaring state variable 'checked' using useState hook, initialized to undefined
  const { trace } = useSelector((state) => state.questions); // Using useSelector to get 'trace' from Redux store state.questions
  const result = useSelector((state) => state.result.result); // Using useSelector to get 'result' from Redux store state.result.result
  const [{ isLoading, apiData, serverError }] = useFetchQuestion(); // Destructuring values from useFetchQuestion custom hook
  const questions = useSelector( // Using useSelector to get 'questions' from Redux store based on 'trace'
    (state) => state.questions.queue[state.questions.trace]
  );
  const dispatch = useDispatch(); // Using useDispatch to get the dispatch function from Redux

  // creating useEffect react Hook
  useEffect(() => { // Using useEffect hook to execute code after render
    dispatch(updateResult({ trace, checked })); // Dispatching an action to update the result when 'trace' or 'checked' changes
  }, [checked]); // Dependency array indicating the effect should run whenever 'checked' changes

  // creating onSelect function
  function onSelect(i) { // Defining a function onSelect which takes index 'i'
    onChecked(i); // Calling the onChecked prop with index 'i'
    setChecked(i); // Updating the 'checked' state with index 'i'
    dispatch(updateResult({ trace, checked })); // Dispatching an action to update the result when 'trace' or 'checked' changes
  }

  if (isLoading) return <h3 className="text-light">Loading</h3>; // If isLoading is true, display a loading message
  if (serverError) // If serverError exists
    return <h3 className="text-light">{serverError || "Unknown Error"}</h3>; // Display the serverError or a default message

  return (
    <div className="questions"> {/* Render a div with className 'questions' */}
      <h2 className="text-light">{questions?.question}</h2> {/* Render the question */}
      <ul key={questions?.id}> {/* Render a list with key as question id */}
        {questions?.options.map((q, i) => ( // Map through options and render each as a list item
          <li key={i}> {/* Render a list item with key as index 'i' */}
            <input
              type="radio"
              value={false}
              name="options"
              id={`q${i}-option`}
              onChange={() => onSelect(i)} // Call onSelect function when the radio button is changed
            />
            {/* to display all the options of the question */}
            <label className="text-primary" htmlFor={`q${i}-option`}>
              {q} {/* Render the option text */}
            </label>
            <div
              className={`check ${result[trace] === i ? "checked" : ""}`} // Add 'checked' class if the result matches the index
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

