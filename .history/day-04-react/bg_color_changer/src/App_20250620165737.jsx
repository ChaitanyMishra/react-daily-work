import {useState } from 'react'
import ChangeBgColor from './backGrounColorChanger/bgChange'
import  ColorChangeButton from './backGrounColorChanger/buttonComponent'
import './App.css'

function App() {
  const [colorState , changeColor] = useState('#0f172a')

  return (
    <div className='w-full h-screen rounded-3xl ' style={{backgroundColor: colorState}}>
      
    <h1 className=' pt-5 text-4xl font-serif font-bold text-blue-300 '>BackGround Color Changer Project</h1>
     <button className="bg-white text-red-300 m-5 p-5 rounded-lg w-[7rem]  ">red</button>
    <ColorChangeButton />
    </div>
  )
}

export default App
