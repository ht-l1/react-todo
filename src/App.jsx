import React, { useState, useEffect } from 'react'
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  async function fetchData() { 
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
      }
    };

    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;
    
    try {
      const response = await fetch(url, options); 
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json(); 
      console.log("API Response:", data); 
      
      const todos = data.records.map(record => ({ 
        id: record.id,
        title: record.fields.title
      }));

      console.log("Transformed Todos:", todos); 

      setTodoList(todos);
      setIsLoading(false);
    } catch (error) {
      console.error("Fetch Error:", error.message); 
    }
  }

  useEffect(() => {
    fetchData(); 
  }, []);

  useEffect(() => {
    if (!isLoading) { 
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }
}, [todoList, isLoading]);

  const addTodo = (newTodoTitle) => {
    const newTodoItem = {
      id: Date.now(), 
      title: newTodoTitle
    };
    setTodoList([...todoList, newTodoItem]);
  }

  const removeTodo = (id) => {
    const updatedTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(updatedTodoList);
  }

  return (
    <>
      {isLoading ? ( 
        <p>Loading...</p> 
      ) : ( 
        <>
          <h1>Todo List</h1>
          <AddTodoForm onAddTodo={addTodo}/>
          <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
        </>
      )} 
    </>
  );
}

export default App
