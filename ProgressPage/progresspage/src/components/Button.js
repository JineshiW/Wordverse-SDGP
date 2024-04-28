import { useState } from 'react';
import './Button.css';

function Button() {
    const [btnState, setBtnState] = useState(false);

    function handleClick() {
        setBtnState(btnState => !btnState);
        window.location.href = 'https://wordverse-sdgp-main-client.vercel.app/service'; 
    }

    let continueCheck = btnState ? 'active' : null;

    return (
        <button
            className={`btn ${continueCheck}`}
            onClick={handleClick}
        > Continue
        </button>
    );
}

export default Button;
