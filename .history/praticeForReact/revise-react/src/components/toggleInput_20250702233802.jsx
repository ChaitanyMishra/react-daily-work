import React from 'react'
import { useState , useEffect } from 'react'

function ToggleInput() {
    const [buttonState , setButtonState] = useState(false)
    const [input , setInput] = useState("")
    useEffect(() => {
        const pera = document.getElementById(pera)
        pera.textContent = `${input}`

    } , [input])
    const handleInput = () => {

    }
  return (
    <div className='flex flex-col bg-zinc-400 h-screen w-screen rounded-2xl items-center justify-center '>
      <div className='flex flex-col gap-10'>
        <h1 className='text-5xl text-center'>Toggle input</h1>
            <input type="text" className='px-4 py-3 rounded-md placeholder:enter text'  onChange={handleInput} />
            <button className='px-3 py-4 rounded-xl bg-slate-900 text-white'>{buttonState ? "click me"}</button>
            <p className=' text-3xl text-center text-blue-700' id='pera' >Your input Appear hear {input} </p>
      </div>
    </div>
  )
}

export default ToggleInput
