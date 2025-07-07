import React from "react";
import { useTodo } from "../Context";      // ✅ Correct relative import
import TodoItem from "./todo-item.jsx";    // ✅ Assuming both are in Components/

function TodoItems() {
  const { todos } = useTodo();

  return (
    <>
      {todos.length === 0 ? (
        <p className="text-center text-gray-500">No todos yet. Add one!</p>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </>
  );
}

export default TodoItems;
