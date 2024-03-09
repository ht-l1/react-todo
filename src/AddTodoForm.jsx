// Handle "Add Todo Form" Submit

import React from 'react';

function AddTodoForm(props) {
    function handleAddTodo (event) {
        event.preventDefault()
        // retrieve the value of the title element from the event target and store it in a variable named todoTitle
        const todoTitle = event.target.elements.title.value;
        // invoke the onAddTodo callback prop and pass todoTitle as an argument
        props.onAddTodo(todoTitle)
        // reset the form so the text input value is cleared
        event.target.reset();
    }
    
    return (
        // Add onSubmit prop to form element and pass the handleAddTodo function by reference
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input type="text" id="todoTitle" name="title"/>
            <button type="submit">Add</button>
        </form>
    )
}

export default AddTodoForm;