import { useState } from 'react'

import './App.css'

const addValue = () =>{
  console.log("Value : " , Math.random())
  return(
    counter+=1
  );
}

function App() {

  

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
