import React from 'react';
import './Textpart.css';
import Bar  from './Bar';

export default function Textpart() {
  return (
    <div className="textpart">
        <div className='text-row'>
          <p>LEVEL COMPLETE</p>
        </div>
        <Bar/>
        <div className='text-row3'>
          <p>Congratulations!</p>
        </div>
        

       
    </div>
  )
}
