import React, { useEffect, useState } from 'react';
import TodoCard from './TodoCard';
import { useContext } from 'react';
import { todoData } from './Todo';
import './Styles/TodoList.css';

const TodoList = () => {
  const todoFormData = useContext(todoData);
  return (
    <div
      className={`todo-list-container ${
        todoFormData.length > 0 ? 'active' : ''
      }`}
    >
      {todoFormData.length > 0 && (
        <h2 className="todo-heading">Pending Todos</h2>
      )}

      <div className="todo-cards">
        {todoFormData.length > 0 &&
          todoFormData.map((todo, index) => {
            return (
              <TodoCard key={`${todo.id}-pending`} item={todo} type="pending" />
            );
          })}
      </div>
    </div>
  );
};

export default TodoList;
