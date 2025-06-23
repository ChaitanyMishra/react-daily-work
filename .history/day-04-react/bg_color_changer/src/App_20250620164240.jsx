import {useState } from 'react'
import ChangeBgColor from './backGrounColorChanger/bgChange'
import  ColorChangeButton from './backGrounColorChanger
import './App.css'

function App() {
  const [colorSate , changeColor] = useState("olvie")

  return (
    <>
    <h1 className='text-4xl font-serif font-bold text-blue-300 '>BackGround Color Changer Project</h1>


    </>
  )
}

export default App
