import React from 'react';
import TodoItem from "./todo";
import Modal from "../modal";
import './styles.css';

const TodoList = (props) => {
  const [isOpened, setOpen] = React.useState(false);
  const [openedId, setOpenedId] = React.useState(null);

  const close = () =>{
    setOpen(!isOpened);
  };

  const openModal = (id) => {
    setOpen(true);
    setOpenedId(id);
  };

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
      <Modal todo={} isOpened={isOpened} onClose={close} />
    </>
  );
};

export default TodoList;
