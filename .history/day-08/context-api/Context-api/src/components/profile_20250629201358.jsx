import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

export default function Profile() {
  const { user } = useContext(UserContext)

  if (!user) {
    return <div>Please log in to view your profile.</div>
  }

  return (
    <div>
      <h2>Welcome, {user.userName}!</h2>
    </div>
  )
}
