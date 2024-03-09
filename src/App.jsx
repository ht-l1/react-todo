// Store "New Todo" in React State

import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'

function App() {
  // const [count, setCount] = useState(0)

  // create a new state variable named newTodo with update function named setNewTodo
  const [newTodo,setNewTodo] = useState('')

  return (
    <>
      <div>
        <h1>Todo List</h1>
        <AddTodoForm onAddTodo={setNewTodo}/>
        
        {/* displays the value of newTodo variable */}
        <p>New Todo: {newTodo}</p>
        
        <TodoList />
      </div>
    </>
  )
}

export default App
