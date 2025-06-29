import React from 'react'
import { useState , useContext } from 'react'
import {UserContext} from '../context/UserContext'

function LogIn() {

    const [userName , setUserName] = useState(null)
    const handleSubmit = (e) => {
        e.pre
    }

  return (
    <div>
      <h2>Log In</h2>
      <input type="text" placeholder='UserName'/>
      <input type="password" name="" id="" />
      <button onClick={handleSubmit}>Log In</button>

    </div>
  )
}

export default LogIn
