import React from 'react';
import Todo from './models/Todo';
import TodoList from './models/TodoList';
import TodoListView from './views/TodoListView';
import './App.css';

const store = new TodoList([new Todo("Get Coffee"), new Todo("Write simpler code")])


function App() {
  return (
    <div className="App">
      <TodoListView todoList={store} />
    </div>
  );
}

export default App;
