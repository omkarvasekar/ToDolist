import { useEffect, useState } from "react";
import TodoInput from "../components/TodoInput"
import TodoList from "../components/TodoList"

function App() {

  
const [todos,setTodos]=useState([ ])
const [TodoValue, setTodoValue]=useState('')

   
  function DataSaver(newList){
      localStorage.setItem('todos',JSON.stringify({todos:newList}))
  }

  function HandleAddTodo(newTodo){
    const newTodoList=[...todos,newTodo]
    DataSaver(newTodoList)
    setTodos(newTodoList)
  }
  function HandleDelete(index){
    const newTodoList=todos.filter((todo,todoIndex)=>{return todoIndex!==index})
    DataSaver(newTodoList)
    setTodos(newTodoList)
  }
  function HandleEdit(index) {
    const valueEdited=todos[index]
    setTodoValue(valueEdited)
    HandleDelete(index)
  }

  useEffect(()=>{
    if(!localStorage)
    {
      return
    }
    let localTodo=localStorage.getItem('todos')
    if(!localTodo){
      return
    }
    localTodo=JSON.parse(localTodo).todos
    setTodos(localTodo)
  },[])
  return (
    <> 
    <header><div><h1>The To-Do App</h1></div></header>
    <TodoInput TodoValue={TodoValue} setTodoValue={setTodoValue} HandleAddTodo={HandleAddTodo}/>
    <TodoList HandleEdit={HandleEdit} HandleDelete={HandleDelete} todos={todos}/>
    </>
  )
}

export default App
