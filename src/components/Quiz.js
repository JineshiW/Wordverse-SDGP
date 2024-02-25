import React, { useEffect } from 'react'
import Questions from './Questions';
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/fetchQuestion';

// redux store import
import {useSelector, useDispatch} from 'react-redux';
import { PushAnswer } from '../hooks/setResult';

export default function Quiz() {

  const state = useSelector(state => state.questions.trace);
  const {queue, trace} = useSelector(state => state.questions);
  const dispatch =useDispatch()

  useEffect(() =>{
    // get the initial value of the queue
    // console.log(state)
  })
  
  // next button event handler
  function onNext(){
    // console.log('On next click')
    // MoveNextQuestion wil work only if trace is less than queue.length
    if(trace< queue.length){
      // update the trace value by one using MoveNextQuestion
      dispatch(MoveNextQuestion())

      dispatch(PushAnswer(1))
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
