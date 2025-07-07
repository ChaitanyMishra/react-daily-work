import { createContext , useContext} from "react";
const todoContext = createContext({

    todos:[
        {
            id: 1,
            todo: "todo-msg",
            completed: false
        }
        add
    ]

});

export const useTodo = () => {
    return useContext(todoContext)
}