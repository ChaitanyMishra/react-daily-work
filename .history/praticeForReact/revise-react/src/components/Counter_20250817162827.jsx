import React from 'react'
import { useState } from 'react'

export default function Counter() {

  const [counter , setCounter] = useState(0)
  return (
    <div className=' flex justify-center gap-5 text-white'>
      <button onClick={setCounter} className=' '>Increse</button>
      <p className=" text-2xl text-red-300 text-center ">
        Counter Is: {counter}
      </p>
      <button>Decrese</button>
    </div>
  )
}
