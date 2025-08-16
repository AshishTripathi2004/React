import { useState } from 'react'
import './App.css'

function App() {
   let [counter, setCounter] = useState(0);

   let addValue = ()=>{
    if(counter==20) return;
    counter=counter+1;
    setCounter(counter);
   }

   let removeValue = ()=>{
    if(counter==0) return;
    counter=counter-1;
    setCounter(counter);
   }

  return (
    <>
    <h1>COUNT IT UP!</h1>
    <h3>COUNTER : {counter}</h3>

    <button onClick={addValue}>Make it rise</button>
    <br/>
    <button onClick={removeValue}>Make it drop</button>
    </>
  )
}

export default App
