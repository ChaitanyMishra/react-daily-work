import React, { useState } from 'react'
import { useRef } from 'react'

function Github() {
    const inputInfo = useRef()
    const [user , setUser] = useState(null)
    
    const HeandleClick = async () =>{
      const userName = inputInfo.current.value;
      const api = `https://api.github.com/users/${userName}`
      try{
        const response = await fetch(api)
        if(!response.ok){
          throw new Error(`Response Status ${response.status}`);
        }
        const result = await response.json()
        console.log(result)
        setUser(result)

      
      }catch(error){
        console.log(error)
      
      }
    }
  return (
    <div className=' text-center text-blue-50 text-2xl italic m-4 bg-blue-950  p-4 flex flex-col'>
      GitHUb Followers
      <div className=' flex mx-auto gap-5 my-3'>
    <input type="text" placeholder='Enter Github Username' ref={inputInfo} className=' text-black px-3 py-1 max-w-sm justify-center items-center rounded-lg shadow-2xl ' />
      <button className='px-5 bg-white/20 backdrop:blur-xl hover:bg-blue-600 text-white max-w-32 rounded-lg' onClick={HeandleClick}>Find</button>
      </div>
    {
      user && (
        <div className='m-4 p-3 rounded-lg shadow-2xl bg-white/20 backdrop:blur-2xl h-auto w-auto flex justify-center gap-3 items-center flex-col'>
          
          <img src={user.avatar_url} alt="Image avtar" className='rounded-full w-32' />
          <p>{user.name}</p>
          <p>{user.bio}</p>
        <div className='flex items-center justify-evenly w-full bg-slate-700 rounded-lg p-2'>
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
          <p>Repos: {user.repos}</p>
        </div>

        </div>
      )
    }
    </div>
  )
}
export default Github;