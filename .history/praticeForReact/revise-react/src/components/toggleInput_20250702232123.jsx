import React from 'react'

function ToggleInput() {
  return (
    <div className='flex flex-col bg-zinc-400 h-screen w-screen rounded-2xl '>
      <div>
        <h1 className='text-5xl text-center'>Toggle input</h1>
            <input type="text" className='px-4 py-3 rounded-md placeholder:Enter text' />
            <button px-3 py4 rou>Click me</button>
      </div>
    </div>
  )
}

export default ToggleInput
