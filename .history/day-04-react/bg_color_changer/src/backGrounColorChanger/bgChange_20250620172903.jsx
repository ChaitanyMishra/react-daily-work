export default function ChangeBgColor(){
    return(
        <div className=" h-[5rem] w-[70%] bg-slate-50 flex flex-wrap justify-center items-center m-auto bottom-10 fixed rounded-2xl duration-200 inset-x-0 ">
           <div className=" gap-5 flex justify-center items-center flex-wrap m-auto pt-0">
            <button className="m-2 px-3 py-2 rounded-2xl bg-red-700 w-[7rem] text-red-100 text-lg shadow-lg hover:bg-red-900 " >Red</button>
            <button className="m-2 px-3 py-2 rounded-2xl bg-green-700 w-[7rem] " >Green</button>
            <button className="m-2 px-3 py-2 rounded-2xl bg-blue-700 w-[7rem] " >Blue</button>
            <button className="m-2 px-3 py-2 rounded-2xl bg-yellow-700 w-[7rem] " >Yellow</button>
            <button className="m-2 px-3 py-2 rounded-2xl bg-pink-700 w-[7rem]" >Pink</button>
            <button className="m-2 px-3 py-2 rounded-2xl bg-purple-700 w-[7rem]" >Purple</button>
            <button className="m-2 px-3 py-2 rounded-2xl bg-gray-950 w-[7rem]" >Reset</button>
            
            </div>
        </div>

    )


}