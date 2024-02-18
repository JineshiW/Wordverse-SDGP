import React, { useEffect } from 'react'
import Questions from './Questions';

// reduc store import
import {useSelector} from 'react-redux';

export default function Quiz() {

  const state = useSelector(state => state)

  useEffect(() =>{
    console.log(state)
  })
  
  // next button event handler
  function onNext(){
    console.log('On next click')
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
