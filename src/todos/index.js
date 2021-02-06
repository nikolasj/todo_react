import React from 'react';
// import todos from '../mock';

const TodoList = (props) => {
    console.log(props);
    return (
        <ul className="todoList">
        {
          props.todos.map((todo) => {
            return (
                <li className="todo" key={todo.id}>
                    <div>{todo.text}</div>
                    <div>{todo.name}</div>
                </li>
            )
          })
        }
      </ul>
    )
}

export default TodoList;