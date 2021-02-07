import React from 'react';

import TodoItem from "./todo";
import './styles.css';

const TodoList = (props) => {
    console.log(props);
    return (
        <ul className="todoList">
        {
          props.todos.map((todo) => {
            return (
                <TodoItem todo={todo} key={todo.id}/>
            )
          })
        }
      </ul>
    )
}

export default TodoList;