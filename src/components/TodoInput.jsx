import React from 'react';
import { useState } from 'react';
import styles from "../styles.css";
const TodoInput = ({ addTodo })=> {
const [value, setValue ] = useState("");

return (
  <div>
    <input className={styles.input} type="text"
    value={value}
    placeholder="Add Something"
    onChange={(e)=> {
      setValue(e.target.value);
    }}/>
    <button
    disabled={!value}
    onClick={()=> {
      addTodo(value);
      setValue("");
    }}>
      Add
    </button>
  </div>
) ;
} ;

export default TodoInput ;