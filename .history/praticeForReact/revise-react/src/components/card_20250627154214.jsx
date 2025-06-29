import logo from "../assets/Logo.jpg"

const Card = () =>{
   return(
    <div className="flex justify-center">
        <h1 className=" text-center text-purple-600 font-extrabold italic text-4xl">My Card</h1>
    <div className=" absolute flex flex-col h-[20rem] w-[14rem] bg-purple-600 m-auto my-14 rounded-2xl">
        <img src={logo} alt="Chaitany Logo" className="relative top-0 left-0 h-20 w-20 rounded-full mx-auto my-3 object-cover focus:none" />
        <input type="text" className=" bg-purple-400 p-4 rounded-xl w-[14vw] mx-auto text-purple-100" />
        <button className="bg-p"> Submit </button>
        
        

    </div>
    </div>
   )

}

export default Card