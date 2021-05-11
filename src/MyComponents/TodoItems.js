import React from 'react'
export const TodoItems= ({todo,onDelete}) => {
    return (
        <div>
         <h4>{todo.title}</h4>  
         <p>{todo.desc}</p>
         <button classNmae="btn btn-sm btn-Danger" onClick={()=>{onDelete(todo)}}>Delete</button>
        
        </div>
    )
}
