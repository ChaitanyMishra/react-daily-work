import logo from "../assets/Logo.jpg"

const Card = () =>{
   return(
    <div>
        <h1 className=" text-center text-purple-600 font-extrabold italic text-4xl">My Card</h1>
    <div className=" absolute flex flex-col h-[20rem] w-[14rem] bg-purple-900 m-auto my-8 rounded-2xl">
        <img src={logo} alt="Chaitany Logo" className="relative top-0 left-0 h-20 w-20 rounded-full m-3" />
        
        

    </div>
    </div>
   )

}

export default Card