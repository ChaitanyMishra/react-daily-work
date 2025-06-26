import { useState } from "react";

export default function Counter() {
    const [counter  , setCounter] = useState(0)

    function handelIncrement() {
        if(counter <= 20) setCounter(prev => prev+1)
    }
    function handeDecrement() {
        if(counter <= 20) setCounter(prev => prev+1)
    }


 

    
}