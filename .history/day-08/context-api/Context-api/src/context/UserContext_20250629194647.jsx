import React, { useState } from "react";
import UserContext from './UserContext'

const useer = ({childern}) =>{
    const [user , setUser] = useState(null);
    return(
        <UserContextProvider value={{user , setUser}}>
            {childern}
        </UserContextProvider>
    )
}

export default UserContext