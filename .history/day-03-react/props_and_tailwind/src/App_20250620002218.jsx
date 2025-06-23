import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './cardComponent/card'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  

  return (
  <>
  <h1 className='bg-red-100 text-black p-3 rounded-xl hover:bg-red-900' >day-03-react</h1>
  
 
< ProfileCard />
<
<Card name="chaitany" />
<Card />
<Card />
  </>
  )
}

export default App
