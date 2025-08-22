import React from 'react'



export default function Counter() {
const [counter , ]
  
  return (
    <div className=' flex justify-center gap-5 text-white'>
      
      <button onClick={() => {counter+=1}} className=' rounded-xl bg-blue-500 px-3 py-1 text-lg hover:bg-blue-600 hover:text-cyan-100 w-auto'>Increse</button>
      
      <p className=" text-2xl text-red-300 text-center ">
        {counter}
      </p>
      <button className=' rounded-xl bg-blue-500 px-3 py-1 text-lg hover:bg-blue-600 hover:text-cyan-100 w-auto '>Decrese</button>
    </div>
  )
}
