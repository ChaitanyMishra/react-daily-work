import { useState } from "react";

export default function Counter() {
    const [counter  , setCounter] = useState(0)

    function handelIncrement() {
        if(counter <= 20) setCounter(prev => prev+1)
    }
    function handeDecrement() {
        if(counter >= 0) setCounter(prev => prev-1)
    }

    return(
    <div className="flex space-x-4 items-center bg-slate-500 px-6 py-4 rounded-lg shadow-md">
        <button></button>
       
    </div>
    )


 

    
}