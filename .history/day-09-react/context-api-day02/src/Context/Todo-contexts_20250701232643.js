import { createContext , useContext} from "react";
const todoContext = createContext({

    todos:[
        {
            id: 1,
            todo: "todo-msg",
            completed: false
        }
        
    ],
    addTodo: (todo) => {},
    updateTodo: (id , todo) => {},
    deleteTodo

});

export const useTodo = () => {
    return useContext(todoContext)
}