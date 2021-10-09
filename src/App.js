import React, { useState } from 'react';

// components
import Form from './Form';
import TodoList from './TodoList';

// CSS files
import './App.css'
import './loader.css'

const App = () => {

  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  }

  return (
    <div>
      <h1>Progressive Web App<br /> TODO</h1>
      <Form addTodo={addTodo}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
    
    // <div id="load">
    //   <div>G</div>
    //   <div>N</div>
    //   <div>I</div>
    //   <div>D</div>
    //   <div>A</div>
    //   <div>O</div>
    //   <div>L</div>
    // </div>
  );
}

export default App;