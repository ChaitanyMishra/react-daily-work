import { createContext , useContext} from "react";
const todoContext = createContext({

    todos:[
        {}
    ]

});

export const useTodo = () => {
    return useContext(todoContext)
}