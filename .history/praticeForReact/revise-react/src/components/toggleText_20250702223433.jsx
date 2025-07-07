import React from 'react'
import { useState } from 'react'

function toggleText() {
    const [text , setText]  = useState("");
  return (
    <div>
      <p>before Changes</p>
      <button className='px-3 py-4 rounded-lg bg-slate-950 text-white text-c'>Click TO change pera</button>
    </div>
  )
}

export default toggleText
