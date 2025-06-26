import { useState } from "react";

export default function Counter() {
    const [counter  , setCounter] = useState(0)
    const [message, setMessage] = useState("");

    function handelIncrement() {
        if(counter < 20) {
            setCounter(prev => prev+1)
            
        }
    }
    function handeDecrement() {
        if(counter > 0){
            setCounter(prev => prev-1)
        }
    }
    

    return(
    <div className="flex space-x-4 items-center bg-slate-600 px-6 py-4 rounded-lg shadow-md">
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded" onClick={handelIncrement}>Increment</button>
        <h2 className="text-white text-2xl font-bold">{counter}</h2>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 rounded" onClick={handeDecrement}>Decrement</button>
    
    {
        message && (
            <span className="text-yellow-300 font-semibold">{message}</span>
        )
    }
    </div>
    )
    


 

    
}