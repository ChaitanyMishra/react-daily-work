import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let counter = 15;

  return (
    <>
    <h1>Counter App using react</h1>
    <h2>counter value: {counter}</h2>
    <button onClick={Add }>Add Value</button><br />
    <button>Remove Value</button>
    </>
  )
}

export default App
