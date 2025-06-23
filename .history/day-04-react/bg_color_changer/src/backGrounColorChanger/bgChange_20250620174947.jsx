export default function ChangeBgColor({changeColor}){
    return(
        <div className=" h-[5rem] w-[70%] bg-slate-950 flex flex-wrap justify-center items-center m-auto bottom-10 fixed rounded-full duration-200 inset-x-0 ">
           <div className=" gap-5 flex justify-center items-center flex-wrap m-auto pt-0">
            <button onClick={() => {changeColor('red')}} className=" m-2 px-3 py-2 rounded-full bg-red-700 w-[7rem] text-red-100 shadow-lg hover:bg-red-900 text-xl " >Red</button>
            <button className="m-2 px-3 py-2 rounded-full bg-green-700 w-[7rem] text-green-100 hover:bg-green-900 text-xl" >Green</button>
            <button className="m-2 px-3 py-2 rounded-full bg-blue-700 w-[7rem] text-blue-100 hover:bg-blue-900 text-xl" >Blue</button>
            <button className="m-2 px-3 py-2 rounded-full bg-yellow-700 w-[7rem] text-yellow-100 hover:bg-yellow-900 text-xl" >Yellow</button>
            <button className="m-2 px-3 py-2 rounded-full bg-pink-700 w-[7rem] text-pink-100 hover:bg-pink-900 text-xl" >Pink</button>
            <button className="m-2 px-3 py-2 rounded-full bg-purple-700 w-[7rem] text-purple-100 hover:bg-purple-900 text-xl" >Purple</button>
            <button className="m-2 px-3 py-2 rounded-full bg-gray-500 w-[7rem] text-white hover:bg-slate-900  text-xl" >Reset</button>
            </div>
        </div>

    )


}