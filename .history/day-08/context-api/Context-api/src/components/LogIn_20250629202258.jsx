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
    <div className='bg-slate-950 flex flex-col mx-3 my-4 h-screen items-center justify-center text-white text-xl'>
      <h2 className=' font-bold text-5xl'>Log In</h2>
      <form onSubmit={handleSubmit} className='flex flex-col mx-3 my-4'>
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className=' rounded-xl mx-3 my-4 px-3 py-3 bg-slate-700'
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className=' rounded-xl mx-3 my-4 px-3 py-2 bg-slate-700'
        />
        <a type="submit" className='bg-slate-700 px-3 py-2 rounded-lg mx-3 my-4' href='UserCard'>Log In</a>
      </form>
    </div>
  )
}

export default LogIn
