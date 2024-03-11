import React from 'react';
import './Textpart.css';
import Bar  from './Bar';

export default function Textpart() {
  return (
    <div className="textpart">
        <div className='text-row'></div>
        <span className='text'>Complete Level. </span>
        <div className='text-row2'></div>
        <span className='text-row2'>The earned of the badges has successfully completed level on how to build an online course with Learn Badges.</span>
        <Bar/>
        <div className='text-row3'></div>
        <span className='text-row3'>Congratulations for earing this badges.!</span>
        <div className='text-row4'></div>
        <span className='text-row4'>Share with Friends</span>

       
    </div>
  )
}
