import { createContext , useContext} from "react";
const todoContext = createContext({

    todos:[
        {
            id: 1,
            todo: "todo-msg",
            completed: false
        }
        
    ],
    addTodo: (id , tpdp) => {}

});

export const useTodo = () => {
    return useContext(todoContext)
}