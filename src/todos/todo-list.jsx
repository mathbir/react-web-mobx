import React, {useEffect, useState, useContext} from 'react';
import {todoContext} from './todo-context';
import { useObserver } from 'mobx-react-lite';

export default function TodoList() {
  const todoStore = useContext(todoContext)

  useEffect(() => {
    onLoadData();
    
  }, [])

  const onLoadData = async () => {
    await todoStore.getTodos();
    console.log("todos", todoStore.todos);
  }
  return useObserver(() => (
    <div className="todoList">
      <h1>Todo List</h1>
      {todoStore.todos.map(t => <h4 key={t.id}>{t.title}</h4>)}
    </div>
  ));
}


