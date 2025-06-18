import { useState } from 'react';
import './App.css'



function App() {
le [counter , setCounter] = useState(1)
  const addValue = () =>{
    
    console.log("Value : " , Math.random()*10)
    console.log(counter)
  }

  return (
    <>
    <h1>Counter App using react</h1>
    <h2>counter value: {counter}</h2>
    <button onClick={addValue}>Add Value</button><br />
    <button>Remove Value</button>
    </>
  )
}

export default App
