import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let counter = 5;

  return (
    <>
    <h1>Counter App using react</h1>
    <h2>counter value: </h2>
    <button>Add Value</button><br />
    <button>Remove Value</button>
    </>
  )
}

export default App
