 import {useState} from 'react';
 import './Button.css';


     function Button(){
        const [btnState,setBtnState]= useState(false);
    
    function handleClick(){
        setBtnState(btnState=> !btnState)

        
    }

    let CountinueCheck=btnState? 'active':null;

    return(
        <button
         className={'btn${CountineClassCheck}'}
         onClick={handleClick}
        > Countine</button>
    )

 }

 export default Button;