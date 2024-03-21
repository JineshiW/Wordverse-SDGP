import React, { useEffect, useState } from 'react'; // Importing React and its hooks (useEffect, useState)
import Questions from './Questions'; // Importing the Questions component from './Questions'
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/fetchQuestion'; // Importing custom hooks for moving to the next and previous questions

// Redux store imports
import { useSelector, useDispatch } from 'react-redux'; // Importing react-redux hooks (useSelector, useDispatch)
import { PushAnswer } from '../hooks/setResult'; // Importing a custom hook for pushing answers to the result
import { Navigate } from 'react-router-dom'; // Importing the Navigate component from 'react-router-dom'

export default function Quiz() { // Defining a functional component named Quiz
  const [check, setChecked] = useState(undefined); // Declaring state variable 'check' using useState hook, initialized to undefined

  const result = useSelector(state => state.result.result); // Using useSelector to get 'result' from Redux store state.result.result
  const { queue, trace } = useSelector(state => state.questions); // Using useSelector to get 'queue' and 'trace' from Redux store state.questions
  const dispatch = useDispatch(); // Using useDispatch to get the dispatch function from Redux
  
  // Next button event handler
  function onNext() {
    console.log('On next click');
    // MoveNextQuestion will work only if trace is less than queue.length
    if (trace < queue.length) {
      // Update the trace value by one using MoveNextQuestion
      dispatch(MoveNextQuestion());

      // Inserting a new result in the array
      if (result.length <= trace) {
        dispatch(PushAnswer(check));
      }
    }

    // Reset the value of the checked variable
    setChecked(undefined);
  }

  // Previous button event handler
  function onPrev() {
    if (trace > 0) {
      // Decrease the trace value by one using MoveNextQuestion
      dispatch(MovePrevQuestion());
    }
  }

  function onChecked(check) { // Function to handle checked value changes
    console.log(check);
    setChecked(check); // Updating the 'check' state with the new value
  }

  // Finishing quiz after last question
  if (result.length && result.length >= queue.length) { // If the result length is greater than or equal to the queue length
    return <Navigate to={'/mainQuiz/result'} replace='true'/>; // Redirect to the result page
  }

  return (
    <div className='container'> {/* Render a div with className 'container' */}
      <h1 className='title text-light'>Quiz Game</h1> {/* Render the title of the quiz */}
      
      {/* Display questions */}
      <Questions onChecked={onChecked} /> {/* Render the Questions component and pass the onChecked function as a prop */}

      {/* Adding buttons for next and previous */}
      <div className='grid'> {/* Render a div with className 'grid' */}
        {trace > 0 ? <button className='btn prev' onClick={onPrev}>Previous</button> : <div></div>} {/* Conditional rendering of the Previous button */}
        <button className='btn next' onClick={onNext}>Next</button> {/* Render the Next button */}
      </div>
    </div>
  );
}
