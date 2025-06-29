import { useState } from "react"
import logo from "../assets/Logo.jpg"

const Card = () =>{
    const [name , setName] = useState("")
    const [msg  , setMsg] = useState("")
    const handleButton = () => {
        if(name.trim() === ""){
            setName("")
        }else{
            setMsg(`Hello ${name}`)
        }
       
    }
   return(
   

    <div className="flex h-screen w-auto justify-center items-center">
    <div className=" absolute flex flex-col h-[20rem] w-[14rem] bg-purple-600 m-auto my-14 rounded-2xl">
        <h1 className=" text-center text-purple-600 font-extrabold italic text-4xl">Learn About Event Heandling</h1>
        <img src={logo} alt="Chaitany Logo" className="relative top-0 left-0 h-20 w-20 rounded-full mx-auto my-3 object-cover focus:none" />

        <input type="text" className=" bg-purple-400 px-3 py-3 rounded-xl w-[14vw] mx-auto text-purple-100" id="inputBox" onChange={(e) => setName(e.target.value)} value={name} />
        <button className="bg-purple-500 text-blue-100 px-3 py-2 w-28 rounded-xl mx-auto my-3 hover:bg-purple-900 hover:scale-105 duration-300 " onClick={handleButton}>Click me </button>
       {
        msg && (
            <p className="mt-4 text-white font-semibold text-center">Hello {name}! nice to meet you!</p>
        )
       }
    </div>
    </div>
   )

}

export default Card