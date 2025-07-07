import React from 'react'
import { useTodo } from "../Context/"// adjust path if needed
import TodoItem from './TodoItem';   // also import the child component

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
