export default function ChangeBgColor(){
    return(
        <div className=" h-[5rem] w-[70%] bg-slate-50 flex flex-wrap justify-center items-center m-auto bottom-10 fixed rounded-2xl duration-200 inset-x-0 ">
           <div className=" gap-5 flex justify-center items-center flex-wrap m-auto pt-0">
            <button className="m-2 px-3 py-2 rounded-2xl bg-red-700 w-[7rem] text-red-100 shadow-lg hover:bg-red-900 text-2xl " >Red</button>
            <button className="m-2 px-3 py-2 rounded-2xl bg-green-700 w-[7rem] text-green-100 hover:bg-green-900 " >Green</button>
            <button className="m-2 px-3 py-2 rounded-2xl bg-blue-700 w-[7rem] text-blue-100 hover:bg-blue-900 " >Blue</button>
            <button className="m-2 px-3 py-2 rounded-2xl bg-yellow-700 w-[7rem] text-yellow-100 hover:bg-yellow-900 " >Yellow</button>
            <button className="m-2 px-3 py-2 rounded-2xl bg-pink-700 w-[7rem] text-pink-100 hover:bg-pink-900" >Pink</button>
            <button className="m-2 px-3 py-2 rounded-2xl bg-purple-700 w-[7rem] text-purple-100 hover:bg-purple-900" >Purple</button>
            <button className="m-2 px-3 py-2 rounded-2xl bg-gray-950 w-[7rem] text-white hover:bg-slate-900 " >Reset</button>
            
            </div>
        </div>

    )


}