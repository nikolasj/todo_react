import React from 'react';
import TodoItem from "./todo";
import Modal from "../modal";
import './styles.css';

const TodoList = (props) => {
  const [openedId, setOpenedId] = React.useState(null);

  const close = () => {
    setOpenedId(null);
  };

  const openModal = (id) => {
    setOpenedId(id);
  };

  const todo = props.todos.find(function(todo) {
      return todo.id === openedId;
  });

  return (
    <>
      <ul className="todoList">
        {
          props.todos.map((todo) => {
            return (
              <TodoItem todo={todo} key={todo.id} onClick={() => openModal(todo.id)} />
            )
          })
        }
      </ul>
      {todo && <Modal title={todo.title} isOpened={!!openedId} onClose={close}>{todo.text}</Modal>}
    </>
  );
};

export default TodoList;
