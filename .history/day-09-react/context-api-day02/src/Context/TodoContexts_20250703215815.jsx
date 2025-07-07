// Context.jsx
import { createContext, useContext, useState } from "react";

// Create context
const TodoContext = createContext();

// Custom hook
export const useTodo = () => useContext(TodoContext);

// Provider component
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      todo: "todo-msg",
      completed: false,
    },
  ]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: Date.now(), todo, completed: false }]);
  };

  const updateTodo = (id, newTodo) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, todo: newTodo } : item
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      {children}
    </TodoContext.Provider>
  );
};

// ✅ Missing line added here

