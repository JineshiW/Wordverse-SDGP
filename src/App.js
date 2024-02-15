import "./styles.css";
import Progressbar from "./components/Progressbar"
import { useEffect, useState} from "react";

 

export default function App(){
  const [value,setValue]= useState(0);

  useEffect(()=> {
    setInterval(()=>{
      setValue((val) => val + 1);
    },100);
  },[] );



  return(
    <div className="App">
      <span>Progress Bar</span>
      <Progressbar value={value}/> 
    </div>
   );
  }

 