// Move List Item into New "Todo List Item" Component

import React from 'react';

function TodoListItem(props) {
    return (
        <li key={props.todo.id}>{props.todo.title}</li>
    )
}

export default TodoListItem;