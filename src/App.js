import React from 'react';
import todos from './mock';
import TodoList from './todos';
import './App.css';

function App() {
  return (
    <div className="App">
        <TodoList todos={todos} />
    </div>
  );
}

export default App;
