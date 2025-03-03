import React, { useContext } from 'react';
import { completeTodoData } from './Todo';
import TodoCard from './TodoCard';
const CompleteTodoList = () => {
  const todoFormData = useContext(completeTodoData);
  return (
    <div
      className={`todo-list-container ${
        todoFormData.length > 0 ? 'active' : ''
      }`}
    >
      {todoFormData.length > 0 && (
        <h2 className="todo-heading">Complete Todos</h2>
      )}

      <div className="todo-cards">
        {todoFormData.length > 0 &&
          todoFormData.map((todo, index) => {
            return (
              <TodoCard
                key={`${todo.id}-complete`}
                item={todo}
                type="complete"
              />
            );
          })}
      </div>
    </div>
  );
};

export default CompleteTodoList;
