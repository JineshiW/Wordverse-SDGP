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
  
  // next button event handler
  function onNext(){
    console.log('On next click')
    // MoveNextQuestion wil work only if trace is less than queue.length
    if(trace< queue.length){
      // update the trace value by one using MoveNextQuestion
      dispatch(MoveNextQuestion())

      // inserting a new result in the array
      if(result.length<=trace){
        dispatch(PushAnswer(check))

      }
    }

    // reset the value of the checked variable
    setChecked(undefined)
  }

  // prev button event handler
  function onPrev(){
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
        {trace>0 ? <button className='btn prev' onClick={onPrev}>Previous</button> : <div></div>}
        <button className='btn next' onClick={onNext}>Next</button>
      </div>
    </div>
  )
}
