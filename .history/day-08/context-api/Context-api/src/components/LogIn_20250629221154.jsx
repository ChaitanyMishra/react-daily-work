import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext' // ✅ Correct import
import UserCard from './UserCard'

function LogIn() {
  const { setUser } = useContext(UserContext)
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!userName || !password) {
      alert("Please enter both username and password.")
      return
    }
    setUser({ userName, password })
  }

  return (
    <div className='bg-slate-50 flex flex-col mx-3 my-4 h-screen items-center justify-center text-white text-xl dark:bg-slate-900 da'>
      <form onSubmit={handleSubmit} className='flex flex-col mx-3 my-4 rounded-lg bg-slate-300  justify-around shadow-slate-700 shadow-sm'>
        <h2 className=' font-bold text-5xl text-slate-700 text-center  pt-2 pb-12'>Log In</h2>
        <label className='text-slate-700 px-5 font-semibold text-base italic'>username:</label>
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className=' rounded-xl mx-3 my-2 px-3 py-3 bg-slate-700'
        />
        <label className='text-slate-700 px-5 font-semibold text-base italic'>password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className=' rounded-xl mx-3 my-2 px-3 py-2 bg-slate-700'
        />
        <button type="submit" className='bg-slate-700 px-3 py-2 rounded-lg mx-3 my-2'>Log In</button>
        <p className='text-sm text-red-600 px-5 pb-3 text-center'>Don't have account? <span className='italic text-blue-600'>sign up</span></p>
      </form>
    </div>
  )
}

export default LogIn
