import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext' // ✅ Correct import

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
    <div className='bg-slate-700 flex flex-col mx-3 my-4 h-screen items-center justify-center text-red'>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  )
}

export default LogIn
