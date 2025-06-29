import React from 'react'
import { useState , useContext } from 'react'
import UserContext from '../context/UserContext'

function LogIn() {
    const {setUser} = useContext({UserContext)
    const [userName , setUserName] = useState('')
    const [password , setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({userName , password})
    }

  return (
    <div>
      <h2>Log In</h2>
      <input type="text" placeholder='UserName' value={userName}
      onChange={(e) => setUserName(e.target.value)}
      />
      <input type="password" name="" id="" value={password}
      onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Log In</button>

    </div>
  )
}

export default LogIn
