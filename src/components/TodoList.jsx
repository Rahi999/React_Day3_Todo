import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo}) => {
  return (
    <div>
      <h3>TodoApp</h3>
      <ul>
        {todos.map((todo)=> (
          <TodoItem key={todo.id} value={todo.value} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </div>
  ) ;
} ;

export default TodoList ;