import { createContext , useContext} from "react";
const todoContext = createContext({

    todos:[
        {
            id: 1,
            
        }
    ]

});

export const useTodo = () => {
    return useContext(todoContext)
}