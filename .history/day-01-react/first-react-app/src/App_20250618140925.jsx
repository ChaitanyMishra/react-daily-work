import { useState } from 'react'

import './App.css'
function yButton(){
  return(
    <button>1st react button</button>
  );
}

function App() {
  return (
    <div>
   <h1>
    Hello! this is my 1st react app
   </h1>
   <myButton />
  </div>
  );
   
}

export default App
