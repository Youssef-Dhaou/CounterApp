import React, { useEffect, useState } from "react";
import "./Counter.css"

function Counter() {

    const [counter, setCounter] =  useState(0)
    const [timer2, setTimer2] = useState(0)
    const [number, setNumber] = useState(0)


    const increment =()=>{
        setCounter(counter + 1)
    }

    const decrement =()=>{
       counter && setCounter(counter - 1 )
    }

    const reset =()=>{
        setCounter(0)
    }

    useEffect(() => {
        const interval = setInterval(() => {
          setTimer2(timer2 + 1);
        }, 500);
    
        return () => {
          clearInterval(interval);
        };
      });
    

  return (
    <div style={{ backgroundColor: "#2C3E50", width: '500px', height: "auto", boxShadow: "10px 10px #edebe1", borderRadius: "5px", padding: "10px", margin: "2rem auto" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: "0.3rem" }}>
        <button className="button-29" onClick={increment}> + </button>
        <p  style={{ color : "#fff", fontSize: "20px"}}> {counter} </p>
        <button className="button-29" onClick={decrement}> - </button>
      </div>

      <div style={{display:"flex", justifyContent: "center", gap: "0.5rem", margin: "2rem"}}>
        <button className="button-30" onClick={reset} > reset</button>
        <input type="text" onChange={(e)=>setNumber(e.target.value)} value={number}/>
        <button onClick={()=>{setCounter(counter + Number(number)); setNumber(0)}} className="button-30" > Initial</button>
        
      </div>
      <h3 className="timer"> {timer2}</h3>
    </div>
  );
}

export default Counter;
