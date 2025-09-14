import React from 'react'

function Github() {
    const gitHub = ({userName}) =>{}

  return (
    <div className=' text-center text-blue-50 text-2xl italic m-4 bg-blue-950  p-4 flex flex-col'>
      GitHUb Followers
      <div className=' flex mx-auto gap-5 my-3'>
    <input type="text" name="" id="" placeholder='Enter Github Username' className=' px-3 py-1 max-w-sm justify-center items-center rounded-lg shadow-2xl ' />
      <button className='px-5 bg-blue-900 hover:bg-blue-600 text-white max-w-32 rounded-lg'>Find</button>
      </div>
    </div>
  )
}

export default Github
