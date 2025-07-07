import React from 'react'
import { useState } from 'react'

function toggleText() 
  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <p>text</p>
      <button className='px-3 py-4 rounded-lg bg-slate-950 text-white text-center my-5' onClick={() => setText(text ==="" ? "After Use state" : "Reset useState")} >Click TO change pera</button>
    </div>
  )
}

export default toggleText
