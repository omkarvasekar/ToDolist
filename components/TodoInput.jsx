import React, { useState } from 'react'
import TodoList from './TodoList';

const TodoInput = (props) => {
  const {HandleAddTodo,TodoValue,setTodoValue}=props
//   const [TodoValue, setTodoValue]=useState('')
  return (
    <header>
        <input placeholder='Enter the task' value={TodoValue} onChange={(e)=>{setTodoValue(e.target.value) 
        }}/>
        <button onClick={()=>{HandleAddTodo(TodoValue)
        setTodoValue('')}}>Add</button>
    </header>
    
  )
}

export default TodoInput