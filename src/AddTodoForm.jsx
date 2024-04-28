import React, { useState } from 'react';
import InputWithLabel from './InputWithLabel';

function AddTodoForm({ onAddTodo}) {
    const [todoTitle, setTodoTitle] = useState('')
    
    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddTodo(todoTitle);
        setTodoTitle('');
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <InputWithLabel
                id="todo-title"
                value={todoTitle}
                onInputChange = {handleTitleChange}
            >
                Title:
            </InputWithLabel>
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default AddTodoForm;