import {React} from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userId} = useParams();
  return (
    <div>
      <h1 className=' text-4xl  mb-10 text-orange-700 block text-center font-sans max-w-md mx-auto mt-10 font-bold italic'>Thakyou For Visiting! My name is Chaitany Mishra {userId} </h1>
    </div>
  )
}

export default User
