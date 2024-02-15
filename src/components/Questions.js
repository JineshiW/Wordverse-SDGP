import React, { useEffect, useState } from 'react';
import data from '../database/data';

export default function Questions() {

    const [checked, setChecked] = useState(undefined);

    const question= data[0]

    // creating useEffect react Hook
    useEffect(() =>{
        console.log(question)
    })

    
    // creating onSelect fuction
    function onSelect() {
        console.log('radio button change');
    }

    return (
        <div className='questions'>
            <h2 className='text-light'>{question.question}</h2>

            <ul key={question.id}> 

                {
                    // using map function to iterate through the array of options
                    question.options.map((q,i)=> (
                        <li key={i}>
                            <input
                                type='radio'
                                value={false}
                                name='options'
                                id={'q${i}-option'}
                                onChange={onSelect}  
                            />
                            {/* to display all the options of the question */}
                            <label className='text-primary' htmlFor={'q${i}-option'}>{q}</label>
                            <div className='check'></div>
                        </li>
                    ))
                }

            </ul> 
        </div>
    );
}
