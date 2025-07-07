import { createContext , useContext} from "react";
const todoContext = createContext({

    todos:[
        {
            id: 1,
            todo: "todo-msg",
            com
        }
    ]

});

export const useTodo = () => {
    return useContext(todoContext)
}