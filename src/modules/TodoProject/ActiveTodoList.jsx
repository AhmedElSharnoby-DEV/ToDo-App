import React, { useContext } from 'react';
import './Styles/TodoList.css';
import { activeTodoData } from './Todo';
import TodoCard from './TodoCard';

const ActiveTodoList = () => {
  const todoFormData = useContext(activeTodoData);

  return (
    <div
      className={`todo-list-container ${
        todoFormData.length > 0 ? 'active' : ''
      }`}
    >
      {todoFormData.length > 0 && (
        <h2 className="todo-heading">Active Todos</h2>
      )}

      <div className="todo-cards">
        {todoFormData.length > 0 &&
          todoFormData.map((todo, index) => {
            return (
              <TodoCard key={`${todo.id}-active`} item={todo} type="active" />
            );
          })}
      </div>
    </div>
  );
};

export default ActiveTodoList;
