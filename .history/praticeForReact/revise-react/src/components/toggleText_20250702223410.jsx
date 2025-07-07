import React from 'react'
import { useState } from 'react'

function toggleText() {
    const [text , setText]  = useState("");
  return (
    <div>
      <p>before Changes</p>
      <button className=''>Click TO change pera</button>
    </div>
  )
}

export default toggleText
