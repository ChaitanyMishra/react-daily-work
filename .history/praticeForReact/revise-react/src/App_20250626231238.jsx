import './index.css' 
import Info from './components/Info';
import { useState } from 'react';
function App() {
  const [counter , setCounter] = useState(0)

  return (
    <>
    <div className=' h-screen w-full bg-stone-200' >
      <h1 className=' text-center text-purple-600 font-extrabold font-serif text-3xl py-3 italic'>React Revision</h1>
      <div className=' flex flex-col h-auto min-h-64 bg-slate-500 w-56 items-center justify-center m-auto text-white text-xl'>
        <Info name = {"Chaitany"} roll = {"Web Devloper"} location = {"India"} />
      </div>
    

    <div>
      <h1>hello</h1>
    </div>
    

    </>
  )
}

export default App
