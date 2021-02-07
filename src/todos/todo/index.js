import React from 'react';
import './styles.css';

const TodoItem = props => {
    return (
        <li className="todo" onClick={props.onClick}>
            <h3 className="todo-title">{props.todo.text}</h3>
            <div>{props.todo.text}</div>
            <div>{props.todo.name}</div>
        </li>
    )
};

export default TodoItem;
