import{useEffect, useState} from "react";
import{MAX,MIN} from '../constants'
 

function Progressbar({ value = 0, onComplete = () => { } }) {
    const [percent, setPecent] = useState(value);

    // create setPecent 
    useEffect(() => {
        setPecent(Math.min(MAX, Math.max(value, MIN)));
        if (value >= MAX) {
            onComplete();
        }
    }, [value]);


    return (
        <div className="progress">
            <span style={{ color: percent > 49 ? "white" : "black" }}>
                {present.toFixed()}%
            </span>
            <div
                // style = {{widt:'S{present}%'}}
                style={{
                    transform: 'scaleX (S(percent/MAX))', transformOrigin: "left"
                }}
                role="Progressbar" />
            aria-valuemin={MIN};
            aria-valuemax={MAX};
            arial-valuenow= {present.toFixed()}

        </div>
    );
}

export default Progressbar;