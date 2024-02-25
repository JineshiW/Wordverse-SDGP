import React from 'react'
import '../styles/Result.css'
import {Link} from 'react-router-dom';
import ResultTable from './ResultTable';
import { useDispatch } from 'react-redux';

// import actions
import { resetAllAction } from '../redux/questionReducer';
import { resetResultAction } from '../redux/resultReducer';

export default function Result() {

  const dispatch= useDispatch()

  function onRestart(){
    dispatch(resetAllAction())
    dispatch(resetResultAction())
  }

  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Game</h1>

      <div className='result flex-center'>
        <div className='flex'>
          <span>Username</span>
          <span className='bold'>Hannah</span>
        </div>
        <div className='flex'>
          <span>Total Quiz Points: </span>
          <span className='bold'>50</span>
        </div>
        <div className='flex'>
          <span>Total Questions Answered: </span>
          <span className='bold'>05</span>
        </div>
        <div className='flex'>
          <span>Total Attempts: </span>
          <span className='bold'>03</span>
        </div>
        <div className='flex'>
          <span>Total Earned Points: </span>
          <span className='bold'>50</span>
        </div>
        <div className='flex'>
          <span>Quiz Result: </span>
          <span className='bold'>Passed</span>
        </div>
      </div>

      <div className="start">
        {/* navigate user to restart the quiz */}
        <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
      </div>

      <div className='container'>
        {/* result table */}
        <ResultTable></ResultTable>
      </div>
    </div>
  )
}
