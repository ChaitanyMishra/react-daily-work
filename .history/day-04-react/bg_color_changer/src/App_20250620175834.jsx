import {useState } from 'react'
import ChangeBgColor from './backGrounColorChanger/bgChange'

import './App.css'

function App() {
  const [colorState , changeColor] = useState('#0f172f')

  return (
    <div className=' transition-all duration-500 w-full h-[] rounded-3xl ' style={{backgroundColor: colorState}}>
      
    <h1 className=' pt-5 text-4xl font-serif font-bold text-blue-300 '>BackGround Color Changer Project</h1>

    <ChangeBgColor changeColor = {changeColor} />
    </div>
    
  )
   

}

export default App
