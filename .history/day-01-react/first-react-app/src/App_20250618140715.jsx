import { useState } from 'react'

import './App.css'
function myButton(){
  return(
    <button>1st react button</button>
  );
}

function App() {
  return (
   <h1>
    Hello! this is my 1st react app
   </h1>
   <myButton />
  )
}

export default App
