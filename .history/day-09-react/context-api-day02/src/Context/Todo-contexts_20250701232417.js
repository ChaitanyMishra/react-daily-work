import { createContext , useContext} from "react";
const todoContext = createContext({

    todos:[
        {
            id: 1,
            todo: "todo-msg"
        }
    ]

});

export const useTodo = () => {
    return useContext(todoContext)
}