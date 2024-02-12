import React from 'react'

export default function Quiz() {

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

      {/* adding buttons for next and previous */}
      <div className='grid'>
        <button className='btn prev' onClick={onPrev}>Previous</button>
        <button className='btn next' onClick={onNext}>Next</button>
      </div>
    </div>
  )
}
