import React from 'react';
import TodoItem from "./todo";
import Modal from "../modal";
import Search from "../search";
import './styles.css';

const TodoList = (props) => {
  const [openedId, setOpenedId] = React.useState(null);
  const [query, setQuery] = React.useState("");

  const close = () => {
    setOpenedId(null);
  };

  const openModal = (id) => {
    setOpenedId(id);
  };

  const searchUpdate = (text) => {
    setQuery(text);
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
      <Search value={query} onChange={searchUpdate} />
      {todo && <Modal title={todo.title} isOpened={!!openedId} onClose={close}>{todo.text}</Modal>}
    </>
  );
};

export default TodoList;
