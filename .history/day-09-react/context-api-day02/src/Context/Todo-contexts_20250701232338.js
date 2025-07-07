import { createContext , useContext} from "react";
const todoContext = createContext({

    t

});

export const useTodo = () => {
    return useContext(todoContext)
}