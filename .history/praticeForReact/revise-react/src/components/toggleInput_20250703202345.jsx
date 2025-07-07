import React from 'react'
import { useState , useEffect } from 'react'

function ToggleInput() {
    const [buttonState , setButtonState] = useState(false)
    const [input , setInput] = useState("")
    const [typing , setTiming]
    useEffect(() => {
      setTimeout({
        setTiming
      })

    } , [input])
    const handleInput = () => {

    }
  return (
    <div className='flex flex-col bg-zinc-400 h-screen w-screen rounded-2xl items-center justify-center '>
      <div className='flex flex-col gap-10'>
        <h1 className='text-5xl text-center'>Toggle input</h1>
            <input type="text" className='px-4 py-3 rounded-md placeholder:enter text'  onChange={handleInput} />
            <button className='px-3 py-4 rounded-xl bg-slate-900 text-white' onClick={() => setButtonState(!buttonState)}>{buttonState ? "click me" : "reset text"}</button>
            <p className=' text-3xl text-center text-blue-700' id='pera' value ={typing} onChange={setTiming} >Your input Appear hear {input} </p>
            <button  className='px-3 py-4 rounded-xl bg-slate-900 text-white' onClick={() => setInput("")}>Reset Text</button>
      </div>
    </div>
  )
}

export default ToggleInput
