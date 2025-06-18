import { useState } from 'react';
import './App.css'



function App() {
let [counter , setCounter] = useState)
  const addValue = () =>{
    
    console.log("Value : " , Math.random()*10)
    console.log(counter)
    setCounter(counter+1)
  }

  const removeValue = () => {
    setCounter(counter - 1);
  }

  return (
    <>
    <h1>Counter App using react</h1>
    <h2>counter value: {counter}</h2>
    <button onClick={addValue}>Add Value</button><br />
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
