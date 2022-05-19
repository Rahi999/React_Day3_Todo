import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const TodoApp = ()=> {
  const [todos, setTodos] = useState([]) ; 

  const addTodo = (xyz) => {
    setTodos([
      ...todos,
      {
        id:uuidv4(),
        value: xyz,
      },
    ]);
  };

  const deleteTodo = (value) => {
    setTodos(todos.filter((todo) => todo !== value)) ;
  };

  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
    </div>
  ) ;
} ;

export default TodoApp ;