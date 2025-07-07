import React from 'react'
import { useTodo } from "../Context/TodoContexts"// adjust path if needed
   // also import the child component

function TodoItems() {
  const { todos } = useTodo();

  return (
    <>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  ); 
}

export default TodoItems
