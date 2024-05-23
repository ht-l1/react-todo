import React, { useState, useEffect } from 'react'
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: {
            todoList: JSON.parse(localStorage.getItem('savedTodoList')) || []
          }
        });
      }, 2000);
    }).then(result => {
      setTodoList(result.data.todoList);
      setIsLoading(false); 
    });
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
