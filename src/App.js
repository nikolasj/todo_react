import React from 'react';
import logo from './logo.svg';
import todos from './mock';
import TodoList from './todos';


function App() {
  return (
    <div className="App">
        <TodoList todos={todos} />
    </div>
  );
}

export default App;
