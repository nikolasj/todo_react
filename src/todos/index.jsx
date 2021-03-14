import React from 'react';
import TodoItem from "./todo";
import Modal from "../modal";
import Search from "../search";
import './styles.scss';

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

  const todosByQuery = props.todos.filter(todo => todo.title.includes(query));
  const todos = query ? todosByQuery : props.todos;
  const noResults = <div className="noResults">Ничего не найдено</div>;
  const isResults = todosByQuery?.length;

  return (
    <>
      <div className="search-wrap">
        <Search value={query} onChange={searchUpdate} />
      </div>
      <ul className="todo-list">
        {!isResults && noResults}
        {
          todos.map((todo) => {
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

// isResults &&
// {!isResults && noResults}