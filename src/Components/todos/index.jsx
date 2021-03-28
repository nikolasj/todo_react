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

  const RemoveTodo = (id) => {
    const newList = todos.filter((todo) => todo.id !== id);
    setTodos(newList);
  };

  const searchUpdate = (text) => {
    setQuery(text);
  };

  const todo = todos.find((todo) => {
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
                { /* todo:: удалить RemoveTodo */ }
                { /* todo:: isRemoveId - установка isRemovingId */ }
                <TodoItem todo={todo} key={todo.id} onClick={() => openModal(todo.id)} RemoveTodo={() => RemoveTodo(todo.id)} />
              )
            })
          }
        </ul>
        { /* todo:: onSuccess - это removeTodo */ }
        { /* todo:: onSuccess затирает isRemoveId */ }
        { /* todo:: isRemoveId state и реализовать Modal на удаление (передать соотв. props)  */ }
        { /* isRemovingId && <Modal title={todo.title} isOpened={!!openedId} onClose={close}>{todo.body}</Modal> */ }
        {todo && <Modal title={todo.title} isOpened={!!openedId} onClose={close}>{todo.body}</Modal>}
      </>
    )}
    </div>
  );
};

export default TodoList;
