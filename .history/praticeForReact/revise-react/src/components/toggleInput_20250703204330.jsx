import { useState , useEffect } from 'react'

function ToggleInput() {
    const [buttonState , setButtonState] = useState(false)
    const [input , setInput] = useState("")
    const [typing , setTypingStatus] = useState("")
    useEffect(() => {

      setTypingStatus("Typing...")
      const timer = setTimeout(()=>{
        setTypingStatus("Not typing...")
      },2000)

    return () => clearTimeout(timer)
  

    } , [input])
  return (
    <div className='flex flex-col bg-zinc-400 h-screen w-screen rounded-2xl items-center justify-center '>
      <div className='flex flex-col gap-10'>
        <h1 className='text-5xl text-center'>Toggle input</h1>
            <input type="text" className='px-4 py-3 rounded-md placeholder:enter text'  onChange={(e) => setInput(e.target.value)} />
            <button className='px-3 py-4 rounded-xl bg-slate-900 text-white' onClick={() => setButtonState(!buttonState)}>{buttonState ? "click me" : "reset text"} {buttonState.target.value === "reset text" setInput("")}</button>
            <p className=' text-3xl text-center text-blue-700' id='pera'>Your input Appear hear {input} </p>
            <button  className='px-3 py-4 rounded-xl bg-slate-900 text-white'>Reset Text</button>
            <p className=' text-3xl text-center text-blue-700' >{typing}</p>
      </div>
    </div>
  )
}

export default ToggleInput
