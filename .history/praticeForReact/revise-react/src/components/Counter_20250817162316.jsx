import React from 'react'
import { useState } from 'react'

export default function Counter() {
  const setCounter = () => {

  }
  const [counter , setCounter] = useState(0)
  return (
    <div>
      <button></button>
      <p className=" text-2xl text-red-300 text-center ">
        Counter Is: {counter}
      </p>
    </div>
  )
}
