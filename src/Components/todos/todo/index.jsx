import React from 'react';
import './styles.scss';
import {ReactComponent as RemoveIcon} from "../../../assets/icons/icons8-trash-can.svg";

const TodoItem = props => {
    const remove = (e) => {
      e.stopPropagation();
      props.RemoveTodo();
    };

    return (
        <li className="todo" onClick={props.onClick}>
            <h3 className="todo-title">{props.todo.title}</h3>
            <div className="todo-text">{props.todo.body}</div>
            <div className="todo-controls">
              <RemoveIcon className="todo-remove" onClick={remove} />
            </div>
        </li>
    )
};

export default TodoItem;
