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

  const todo = props.todos.filter(function(todo) {
      return todo.id === openedId;
  })

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
        <Modal title={todo.title} isOpened={isOpened} onClose={close}>{todo.text}</Modal>
    </>
  );
};

export default TodoList;
