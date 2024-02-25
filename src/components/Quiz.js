import React, { useEffect, useState } from 'react'
import Questions from './Questions';
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/fetchQuestion';

// redux store import
import {useSelector, useDispatch} from 'react-redux';
import { PushAnswer } from '../hooks/setResult';
import { Navigate } from 'react-router-dom';

export default function Quiz() {

  const [check, setChecked] =useState(undefined)

  const result = useSelector(state => state.result.result);
  const {queue, trace} = useSelector(state => state.questions);
  const dispatch =useDispatch()

  useEffect(() =>{
    // get the initial value of the queue
    console.log(result)
  })
  
  // next button event handler
  function onNext(){
    console.log('On next click')
    // MoveNextQuestion wil work only if trace is less than queue.length
    if(trace< queue.length){
      // update the trace value by one using MoveNextQuestion
      dispatch(MoveNextQuestion())

      dispatch(PushAnswer(check))
    }

  }

  // prev button event handler
  function onPrev(){
    console.log('On prev click')
    if(trace>0){
      // decrease the trace value by one using MoveNextQuestion
      dispatch(MovePrevQuestion())
    }
  }

  function onChecked(check){
    console.log(check)
    setChecked(check)
  }

  // finishing quiz after last question
  if(result.length && result.length >=queue.length){
    return <Navigate to={'/result'} replace='true'/>
  }

  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Game</h1>

      {/* display questions */}
      <Questions onChecked={onChecked}/>

      {/* adding buttons for next and previous */}
      <div className='grid'>
        <button className='btn prev' onClick={onPrev}>Previous</button>
        <button className='btn next' onClick={onNext}>Next</button>
      </div>
    </div>
  )
}
