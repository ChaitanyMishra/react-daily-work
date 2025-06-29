import React from 'react'
import { UserContextProvider } from 'react'
import UserContext from '../context/UserContext'

export default function Profile() {
    const {user} = useContext(UserContexProvidert)
  return (
    <div>
        if ({!user}) return <div>Plese Log In</div>

        return <div>Wellcome {user.userName}</div>
    </div>

  )
}
