import { useState } from 'react';
import './App.css'



function App() {
let [counter , setCounter] = useState()
  const addValue = () =>{
    
    console.log("Value : " , Math.random()*10)
    console.log(counter)
    setCounter(counter+1)
  }

  const removeValue = () => {
    setCounter(counter - 1);
  }
  const checkValueAbove20 = () =>{
    if(counter <= 20){
       addValue()
      
    }else{
     setCounter("You Can Not Go Above 20 ")
    }
  }
 const checkValueBelow0 = () =>{
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
    <button onClick={checkValueAbove20}>Update From {counter} To : {counter+1}</button><br /><br />
    <button onClick={checkValueBelow0}>Decrese From {counter} To : {counter -1 }</button>
    </>
  )
}

export default App
