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
  const checkValue = () =>{
    if(counter <= 20){
       addValue()
      
    }else{
     setCounter("You Can Not Go Above 20 ")
    }
    if(counter < 0){
      setCounter("You Can Not Go Below 0")
    }else{
      removeValue()
    }
  }

  return (
    <>
    <h1>Counter App using react</h1>
    <h2>counter value: {counter}</h2>
    <button onClick={checkValue}>Update From {counter} To : {counter+1}</button><br /><br />
    <button onClick={}>Decrese From {counter} To : {counter -1 }</button>
    </>
  )
}

export default App
