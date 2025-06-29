import React from 'react'
import { useContextP } from 'react'
import UserContextProvider from '../context/UserContextProvider'

export default function Profile() {
    const {user} = useContext(UserContexProvidert)
  return (
    <div>
        if ({!user}) return <div>Plese Log In</div>

        return <div>Wellcome {user.userName}</div>
    </div>

  )
}
