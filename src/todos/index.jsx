import React from 'react';
import TodoItem from "./todo";
import Modal from "../modal";
import './styles.css';

const TodoList = (props) => {
  const [isOpened, setOpen] = React.useState(false);

  const close = () =>{
    setOpen(!isOpened);
  };

  const openModal = () =>{
    setOpen(true);
  };

  return (
    <>
      <ul className="todoList">
        {
          props.todos.map((todo) => {
            return (
              <TodoItem todo={todo} key={todo.id} onClick={openModal} />
            )
          })
        }
      </ul>
      <Modal isOpened={isOpened} onClose={close} />
    </>
  );
};

export default TodoList;
