import React from 'react'

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
