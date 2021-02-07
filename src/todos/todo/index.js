import React from 'react';

import './styles.css';
const TodoItem = props => {
    return (
        <li className="todo">
            <h3>{props.todo.title}</h3>
            <div>{props.todo.text}</div>
            <div>{props.todo.name}</div>
        </li>
    )
}

export default TodoItem;