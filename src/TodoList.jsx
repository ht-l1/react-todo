import React from 'react';

const todoList = [
    { id: 1, title: "Clean The House" },
    { id: 2, title: "Do The Landury" },
    { id: 3, title: "Complete Assignment" }
]

function TodoList() {
    return (
        <ul>
            {todoList.map(todo => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    )
}

export default TodoList;