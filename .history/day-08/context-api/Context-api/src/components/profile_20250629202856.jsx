import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

export default function Profile() {
  const { user } = useContext(UserContext)

  if (!user) {
    return <div>Please log in to view your profile.</div>
  }

  return (
    <div>
      <h2 className='bg-slate-950 px-3 py-2 rounded-lg mx-3 text-center text-blue-200 italic' >Welcome, {user.userName}!</h2>
    </div>
  )
}
