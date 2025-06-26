import { useState } from "react";

export default function Counter() {
    const [counter  , setCounter] = useState(0)

    function handelIncrement() {
        if(counter < 20) {
            setCounter(prev => prev+1)
        }counter && (
            <span className=" text-black ">
                value can't go above 20
            </span>
        )
    }
    function handeDecrement() {
        if(counter > 0){
            setCounter(prev => prev-1)
        }else{
            
        }
    }

    return(
    <div className="flex space-x-4 items-center bg-slate-600 px-6 py-4 rounded-lg shadow-md">
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded" onClick={handelIncrement}>Increment</button>
        <h2 className="text-white text-2xl font-bold">{counter}</h2>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 rounded" onClick={handeDecrement}>Decrement</button>
        
       
    </div>
    )


 

    
}