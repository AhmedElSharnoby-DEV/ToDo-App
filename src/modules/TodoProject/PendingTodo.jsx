import React, { useContext } from 'react';
import './Styles/PendingTodo.css';
import { todoAction } from './Todo';

const PendingTodo = ({ todoId }) => {
  const actions = useContext(todoAction);
  return (
    <div>
      {/* Status Badge */}
      <div className="status-badge">
        <span className="badge bg-warning text-dark">Status: Pending</span>
      </div>

      {/* Buttons Container */}
      <div className="todo-actions">
        <button
          className="btn btn-primary"
          value={todoId}
          onClick={() => actions.addActiveTodo(todoId)}
        >
          Start
        </button>
        <button
          className="btn btn-danger"
          value={todoId}
          onClick={() => actions.removeTodoItem(todoId)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PendingTodo;
