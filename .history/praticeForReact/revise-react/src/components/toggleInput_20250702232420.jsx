import React from 'react'

function ToggleInput() {
  return (
    <div className='flex flex-col bg-zinc-400 h-screen w-screen rounded-2xl items-center justify-center '>
      <div className='flex flex-col gap-10'>
        <h1 className='text-5xl text-center'>Toggle input</h1>
            <input type="text" className='px-4 py-3 rounded-md placeholder:enter text ' />
            <button className='px-3 py-4 rounded-xl bg-slate-900 text-white'>Click me</button>
            <p className=' text-3xl '>Your input Appear hear</p>
      </div>
    </div>
  )
}

export default ToggleInput
