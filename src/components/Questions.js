import React, { useState } from 'react'

export default function Questions() {

    const [checked, setChecked] = useState(undefined)

    function onSelect(){
        setChecked(true)
        console.log('radio button change')
    }

  return (
    <div className='questions'>
        <h2 className='text-light'>Simple Question 1</h2>

        <u>
            <li>
                <input
                 type='radio'
                 value={checked} 
                 name='options'
                 id='qi-option'
                 onChange={onSelect}
                 />
            </li>
        </u>
    </div>
  )
}
