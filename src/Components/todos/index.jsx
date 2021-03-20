import React from 'react';
import { getTodos } from '../../Api';
import TodoItem from "./todo";
import Modal from "../modal";
import Search from "../search";
import './styles.scss';

const TodoList = () => {
  const [todos, setTodos] = React.useState([]);
  const [openedId, setOpenedId] = React.useState(null);
  const [query, setQuery] = React.useState("");

  React.useEffect(() => {
    getTodos().then(res => {
      setTodos(res)
    });
  }, []);

  const close = () => {
    setOpenedId(null);
  };

  const openModal = (id) => {
    setOpenedId(id);
  };

  const searchUpdate = (text) => {
    setQuery(text);
  };

  const todo = todos.find(function(todo) {
      return todo.id === openedId;
  });

  const todosByQuery = todos.filter(todo => todo.title.includes(query));
  const todoList = query ? todosByQuery : todos;
  const noResults = <div className="no-results">Ничего не найдено (:</div>;
  const isResults = todosByQuery?.length;

  return (
    <div className="search">
      <div className="search-wrap">
        <Search value={query} onChange={searchUpdate} />
      </div>
      {!isResults && noResults}
      {isResults && (
      <>
        <ul className="todo-list">
          {
            todoList.map((todo) => {
              return (
                <TodoItem todo={todo} key={todo.id} onClick={() => openModal(todo.id)} />
              )
            })
          }
        </ul>
        {todo && <Modal title={todo.title} isOpened={!!openedId} onClose={close}>{todo.body}</Modal>}
      </>
    )}
    </div>
  );
};

export default TodoList;
