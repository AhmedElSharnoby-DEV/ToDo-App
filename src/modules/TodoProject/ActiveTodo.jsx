import React, { useContext } from 'react';
import { todoAction } from './Todo';
const ActiveTodo = ({ todoId }) => {
  const actions = useContext(todoAction);

  return (
    <div>
      <div className="status-badge">
        <span className="badge bg-primary text-white">Status: Active</span>
      </div>

      <div className="todo-actions">
        <button
          className="btn btn-success"
          value={todoId}
          onClick={() => actions.addCompleteTodo(todoId)}
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default ActiveTodo;
