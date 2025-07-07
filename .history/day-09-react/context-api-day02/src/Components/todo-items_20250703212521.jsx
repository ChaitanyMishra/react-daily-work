import React from 'react'

function TodoItems() {
  return (
    <div>
       const { todos } = useTodo();

  return (
    <>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
    </div>
  )
}

export default TodoItems
