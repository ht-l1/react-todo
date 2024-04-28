import React, { useState } from 'react';

function AddTodoForm({ onAddTodo}) {
    const [todoTitle, setTodoTitle] = useState('')
    
    function handleTitleChange(event) {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }

    function handleAddTodo (event) {
        event.preventDefault()

        onAddTodo({
            title: todoTitle,
            id: Date.now()
        });

        // setTodoTitle('');
        // event.target.reset();
        setTodoTitle('');
    }
    
    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input 
                type="text" 
                id="todoTitle" 
                value={todoTitle}
                name="title"
                onChange={handleTitleChange}
            />
            <button type="submit">Add</button>
        </form>
    )
}

export default AddTodoForm;