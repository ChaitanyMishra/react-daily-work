import { createContext , useContext} from "react";
const todoContext = createContext({});

export cont useTodo = () => {
    return useContext(todoContext)
}