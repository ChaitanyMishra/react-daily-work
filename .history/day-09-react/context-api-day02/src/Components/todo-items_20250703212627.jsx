import React from 'react'

function TodoItems() {
  const { todos } = useTodo();

  return (
    <>
      {todos.map((todo) => (
        <TodoIte key={todo.id} todo={todo} />
      ))}
    </>
  ); 
}

export default TodoItems
