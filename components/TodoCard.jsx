import React from 'react'

const TodoCard = (props) => {
    const {children, HandleDelete, index, HandleEdit} =props
    return (
        <li className="todoItem" >
        {children}
        <div className='actionsContainer'>
         <button onClick={()=>{HandleEdit(index)}}><i className="fa-solid fa-pen-to-square"></i></button>
         <button onClick={()=>{HandleDelete(index)}}><i className="fa-regular fa-trash-can"></i></button>
        </div>
       
        </li>
    )
}

export default TodoCard