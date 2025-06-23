import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './cardComponent/card'
import  ProfileCard  from './cardComponent/profileCard'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  let myDetails = {
    name : 'Chaitany Mishra',
    jobRole : 'Web Devloper'
  }

  return (
  <>
  <h1 className='bg-red-100 text-black p-3 rounded-xl hover:bg-red-900' >day-03-react</h1>
  
 
< ProfileCard name="Chaitany Mishra" jobRole="Web Developer" btnText =  />
< ProfileCard name="vartika Mishra" jobRole="Web Developer"/>
<Card newDetails={myDetails}/>

  </>
  )
}

export default App
