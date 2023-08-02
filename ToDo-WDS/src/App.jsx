import { useState } from "react"
import "./styles.css"

export default function App(){
  const[newItem,setNewItem]=useState("")
  const [todos,setTodos]=useState([])

  function handleSubmit(e){
    e.preventDefault()

    setTodos(currentTodos =>{
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(), title: newItem, completed:false
        }
      ]
    })

    setNewItem("") //Will set the input array as empty once somethings added

  }



  function toggleTodo(id,completed){
    setTodos(currentTodos=>{
      return currentTodos.map(todo =>{
        if(todo.id==id){
          return{...todo,completed}
        }
        return todo // return as it is if the id doesnt match
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos=>{
      return currentTodos.filter(todo => todo.id !== id) //If my current id not = id then keep it otherwise remove
    })
  }
  
  return <>  
  <h1 className="header">Todo List</h1>
  <form onSubmit={handleSubmit} className="new-item-form" >
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input value={newItem} onChange={e=> setNewItem(e.target.value)} type="text" id="item" />
    </div>
    <button className="btn">Add</button>
  </form>
  
  <ul className="list">
    <br/>
    {todos.length===0 && "No Items"}
    {todos.map(todo=>{
      return <li key={todo.id}>
      <label>
        <input type="checkbox"  checked={todo.completed} onChange={e => toggleTodo(todo.id,e.target.checked)}/>
        {todo.title}
      </label>
      <button className="btn btn-danger" onClick={()=>deleteTodo(todo.id)}>Delete</button>
    </li>
    })}
    
  </ul>
  </>
}