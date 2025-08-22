import React from 'react'
import myImg from '../assets/chaitany.jpg'
export default function Card({students}) {
  return (
    <div className=' flex-wrap flex flex-col h-1/4 bg-slate-900 rounded-xl shadow-lg lg:w-1/6 md:w-1/4 sm:w-1/2 justify-center m-auto  shadow-blue-950  '>
        <div className=' h-[100%] w-full '>
      <img src={myImg} alt="Chaitany Mishra" className=' object-cover rounded-md relative h-64 w-full  ' />
      </div>
     
     <p className=' text-center text-lg text-white italic py-3 underline '>{students.jobRole}</p>
     <div className=" max-w-lg text-white text-center space-y-2 items-center grid grid-cols-2 my-4 gap-5 px-2 hover:rounded-xl">
      
     <p className='hover:bg-blue-600 transition-all ease-in duration-500 rounded-xl'>{students.name}</p>
     <p className='hover:bg-blue-600 transition-all ease-in duration-500 rounded-xl' >{students.course}</p>
     <p className='hover:bg-blue-600 transition-all ease-in duration-500 rounded-xl' >{students.college}</p>
     <p className='hover:bg-blue-600 transition-all ease-in duration-500 rounded-xl'>{students.cgpa}</p>
     </div>
    </div>
  )
}
