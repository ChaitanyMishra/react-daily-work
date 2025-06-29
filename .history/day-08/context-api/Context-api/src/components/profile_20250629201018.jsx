import React from 'react'
import { useContext } from 'react'
import UserContextPr from '../context/UserContext'

export default function Profile() {
    const {user} = useContext(UserContext)
  return (
    <div>
        if ({!user}) return <div>Plese Log In</div>

        return <div>Wellcome {user.userName}</div>
    </div>

  )
}
