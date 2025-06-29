import logo from "../assets/Logo.jpg"

const Card = () =>{
   return(
    <div className="flex flex-col h-52 w-28 bg-slate-90 justify-center items-center">
         <img src={logo} alt="Chaitany's Logo" className=" object-cover h-44 w-44 rounded-full flex m-auto my-5" />

    </div>
   )

}

export default Card