import React, { useEffect, useState } from 'react';
import data from '../database/data';
import { useSelector } from 'react-redux';

// importing custom hook
import { useFetchQuestion } from '../hooks/fetchQuestion';

export default function Questions() {

    const [checked, setChecked] = useState(undefined);
    const [{isLoading, apiData, serverError}] = useFetchQuestion()
    const question= data[0]

    const questions = useSelector(state => state.questions.queue[0])

    // creating useEffect react Hook
    useEffect(() =>{
        // get the initial value of the queue
        console.log(questions)
    })
        
    // creating onSelect fuction
    function onSelect() {
        // console.log('radio button change');
    }

    if(isLoading) return<h3 className='text-light'>isLoading</h3>
    if(serverError) return<h3 className='text-light'>{serverError || "Unknown Error"}</h3>
    
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
