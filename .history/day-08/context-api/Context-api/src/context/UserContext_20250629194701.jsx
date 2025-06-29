import React, { useState } from "react";
import UserContext from './UserContext'

const UserContext = ({childern}) =>{
    const [user , setUser] = useState(null);
    return(
        <UserContextProvider value={{user , setUser}}>
            {childern}
        </UserContextProvider>
    )
}

export default UserContextProvider