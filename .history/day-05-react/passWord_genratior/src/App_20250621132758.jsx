import { useState } from 'react'
import './App.css'
import './index.css';

function App() {
  const [length, passLength] = useState(8)

  return (
    <>
      <h1 className=' text-red-900 text-3xl font-bold'>Password Genratior</h1>

    </>
  )
}

export default App
