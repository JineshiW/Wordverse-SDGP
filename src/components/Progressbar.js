import{useEffect, useState} from "react";

const Progressbar= ({ value=0}) =>{
    const [percent,setPecent]= useState(value)

    useEffect(()=>{
        setPecent(Math.min(100,Math.max(value,0)));
    },[value]);

    return(
        <div className="progress">
            <span>{value.toFixed()}%</span>
            <div></div>
        </div>
    );
} ;

export default Progressbar;