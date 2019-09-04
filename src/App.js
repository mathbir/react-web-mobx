import React from 'react';
import './App.css';
import Router from './router';
import {TodoProvider} from './todos/todo-context';
import {BrowserRouter} from 'react-router-dom';




export default function App() {

  return (
    <TodoProvider>
      <BrowserRouter>
        <div className="App">
          <Router/>
        </div>
      </BrowserRouter>
    </TodoProvider>
    
  );
}


