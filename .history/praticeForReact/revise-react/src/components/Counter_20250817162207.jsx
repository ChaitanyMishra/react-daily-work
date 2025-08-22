import React from 'react'
import { useState } from 'react'

export default function Counter() {
  const [counter , setCounter] = useState(0)
  return (
    <div>
      <p className=" text-2xl text-red-300 text-center ">
        Counter Is: {no}
      </p>
    </div>
  )
}
