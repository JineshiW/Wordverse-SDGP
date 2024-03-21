// Importing necessary modules from React and other libraries
import React, { useRef } from 'react'; // Importing React and useRef hook
import { useDispatch } from 'react-redux'; // Importing useDispatch hook from react-redux for dispatching actions
import { Link } from 'react-router-dom'; // Importing Link component from react-router-dom for navigation
import { setUserId } from '../redux/resultReducer'; // Importing action creator setUserId from the resultReducer
import '../styles/Main.css'; // Importing CSS styles for Main component

// Defining the Main component
export default function Main() {
    // Declaring a useRef hook to access the input element
    const inputRef = useRef(null);
    // Declaring useDispatch hook to dispatch actions
    const dispatch = useDispatch();

    // Function to start the quiz
    function startQuiz(){
        // Checking if the input field has a value
        if(inputRef.current?.value){
            // Dispatching an action to set the user id using the value from the input field
            dispatch(setUserId(inputRef.current?.value));
        }
    }

    // Rendering JSX representing the Main component
    return (
        <div className='container'>
            {/* Main title */}
            <h1 className='title text-light'>Quiz</h1>

            {/* List of instructions */}
            <ol>
                <li>You will be asked 10 questions one after another.</li>
                <li>10 points is awarded for the correct answer.</li>
                <li>Each question has three options. You can choose only one option.</li>
                <li>You can review and change answers before the quiz finishes.</li>
                <li>The result will be declared at the end of the quiz.</li>
            </ol>

            {/* Form for entering username */}
            <form id="form">
                <input ref={inputRef} className="userid" type="text" placeholder='Username*' />
            </form>

            {/* Link to start the quiz */}
            <div className='start'>
                <Link className='btn' to={'quiz'} onClick={startQuiz}>Start Quiz</Link>
            </div>
            
            {/* Link to end the quiz */}
            <div className='quit'>
                <Link className='btn' to={'http://localhost:3000/service'}> End Quiz</Link>
            </div>
        </div>
    );
}
