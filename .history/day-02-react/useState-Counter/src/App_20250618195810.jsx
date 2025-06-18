import { useState } from 'react';
import './App.css'



function App() {
let [counter , setCounter] = useState(1)
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
    <button onClick={addValue}>Update {} : {counter+1}</button><br /><br />
    <button onClick={removeValue}>Remove To: {counter -1 }</button>
    </>
  )
}

export default App
