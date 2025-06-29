import React from 'react'
import { useState , useContext } from 'react'
import {UserContext} from '../context/UserContext'

function LogIn() {
  return (
    <div>
      <h2>Log In</h2>
      <input type="text" placeholder='UserName'/>

    </div>
  )
}

export default LogIn
