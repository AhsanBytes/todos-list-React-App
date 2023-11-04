import React from 'react'
import Todolist from "./Todolist.js"

export default function Todos(props) {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto"
  }
  return (
    <div className = "container" style={myStyle}>
        <h3 className='my-3'>Todos List!</h3>
        {props.todos.length===0? "No Todos to Display": 
          props.todos.map((todo)=>{
            console.log(todo.sno);
            return (<Todolist todo={todo} key={todo.sno} onDelete={props.onDelete}/>   
            )
        })
        }
    </div>
  )
}