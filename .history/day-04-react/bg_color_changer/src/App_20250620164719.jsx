import {useState } from 'react'
import ChangeBgColor from './backGrounColorChanger/bgChange'
import  ColorChangeButton from './backGrounColorChanger/buttonComponent'
import './App.css'

function App() {
  const [colorState , changeColor] = useState("olvie")

  return (
    <>
    <h1 className='text-4xl font-serif font-bold text-blue-300 '>BackGround Color Changer Project</h1>
     <button className="bg-white text-red-300 m-5 p-5 rounded-lg w-{}">red</button>
    <ColorChangeButton />
    </>
  )
}

export default App
