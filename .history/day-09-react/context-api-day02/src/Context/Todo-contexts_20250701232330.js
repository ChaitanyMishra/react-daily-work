import { createContext , useContext} from "react";
const todoContext = createContext({

    
});

export const useTodo = () => {
    return useContext(todoContext)
}