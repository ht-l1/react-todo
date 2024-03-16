import React from 'react';
import TodoListItem from './TodoListItem';

const todoList = [
    { id: 1, title: "Clean The House" },
    { id: 2, title: "Do The Landury" },
    { id: 3, title: "Complete Assignment" }
]

function TodoList() {
    return (
        <ul>
            {todoList.map(todo => (
                // <li key={todo.id}>{todo.title}</li>
                // use the TodoListItem Component
                // pass key as a prop euqal to the id of the todo object
                // pass todo as a pop
                <TodoListItem key={todo.id} todo={todo} />
            ))}
        </ul>
    )
}

export default TodoList;