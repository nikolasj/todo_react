import React from 'react';
import './styles.scss';
import {ReactComponent as RemoveIcon} from "../../../assets/icons/icons8-trash-can.svg";

const TodoItem = props => {
    return (
        <>
            <li className="todo" onClick={props.onClick}>
                <h3 className="todo-title">{props.todo.title}</h3>
                <div>{props.todo.body}</div>
                <div>{props.todo.name}</div>
            </li>
            <div className="todo-remove" onClick={props.RemoveTodo}>
                <RemoveIcon className="remove-icon"/>
            </div>
        </>
    )
};

export default TodoItem;
