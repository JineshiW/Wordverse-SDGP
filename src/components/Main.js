import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Main.css';

export default function Main() {

    const inputRef= useRef(null)

  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Game</h1>

        <ol>
            <li>You will be asked 10 questions one after another</li>
            <li>10 points is awarded for the currect answer.</li>
            <li>Each question hads three options. Uou can choose only one option.</li>
            <li>You van review and change answers before the quiz ends.</li>
            <li>The result will be declared at the end of the quiz.</li>
        </ol>

        <form id='form'>
            <input ref={inputRef} className='userid' type='text' placeholder='Username*'/>
        </form>       

        <div className='start'>
            {/* directing routing path to quiz though Link component */}
            <Link className='btn' to={'quiz'}> Start Quiz</Link>
        </div>

        <div className='quit'>
            {/* directing routing path out of quiz though Link component */}
            <Link className='btn' to={'quiz'}> End Quiz</Link>
        </div>

    </div>
  )
}
