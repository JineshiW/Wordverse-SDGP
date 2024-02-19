import React, { useEffect } from 'react'
import Questions from './Questions';
import { MoveNextQuestion } from '../hooks/fetchQuestion';

// redux store import
import {useSelector, useDispatch} from 'react-redux';

export default function Quiz() {

  const state = useSelector(state => state.questions.trace);
  const dispatch =useDispatch()

  useEffect(() =>{
    // get the initial value of the queue
    console.log(state)
  })
  
  // next button event handler
  function onNext(){
    console.log('On next click')
    // update the trace value by one using MoveNextQuestion
    dispatch(MoveNextQuestion())
  }

  // prev button event handler
  function onPrev(){
    console.log('On prev click')
  }

  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Game</h1>

      {/* display questions */}
      <Questions></Questions>

      {/* adding buttons for next and previous */}
      <div className='grid'>
        <button className='btn prev' onClick={onPrev}>Previous</button>
        <button className='btn next' onClick={onNext}>Next</button>
      </div>
    </div>
  )
}
