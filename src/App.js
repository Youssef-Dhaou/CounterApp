import React, { useEffect, useState } from 'react'
import Counter from './Counter/Counter'
import "./App.css"

function App() {

  const [today, setToday] = useState(new Date().toLocaleTimeString())
  const [date, setDate] = useState(new Date().toLocaleDateString())
  const [show, setShow] = useState(false)

  useEffect(()=>{
const myInterval = setInterval(() => {
  setToday(new Date().toLocaleTimeString())
}, 1000);
    return(()=>{
clearInterval(myInterval)
    })
  }, [])

  useEffect(()=>{
    const myInterval = setInterval(() => {
      setDate(new Date().toLocaleDateString())
    }, 1000);
        return(()=>{
    clearInterval(myInterval)
        })
      }, [])


  return (
    <div className='container'>

<span class="text">Counter App</span>
{show? <Counter/>: null}
    
<div className='date'>
<h2> {date}</h2>
<span> Date:  <strong>{today}</strong></span>
</div>

<button className="button-82-pushable" onClick={()=>setShow(!show)}>
  <span className="button-82-shadow"></span>
  <span className="button-82-edge"></span>
  <span className="button-82-front">
    {show? "hide": "show"}
  </span>
</button>

    </div>
  )
}

export default App