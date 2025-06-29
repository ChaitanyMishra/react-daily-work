import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

export default function Profile() {
  const { user } = useContext(UserContext)

  if (!user) {
    return <div className='bg-red-600 px-3 py-4 rounded-lg text-center text-white  text-2xl italic'>Please log in to view your profile.</div>
  }

  return (
    <div>
      <h2 className='bg-slate-600 px-3 py-2 rounded-lg text-center text-blue-200  text-2xl italic' >Welcome, {user.userName}!</h2>
    </div>
  )
}
