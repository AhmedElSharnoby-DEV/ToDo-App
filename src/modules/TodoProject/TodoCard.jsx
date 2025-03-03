import React, { useEffect, useId } from 'react';
import PendingTodo from './PendingTodo';
import ActiveTodo from './ActiveTodo';
import './Styles/PendingCard.css';
import './Styles/ActiveCard.css';
import './Styles/CompleteCard.css';
import CompleteTodo from './CompleteTodo';

const TodoCard = (props) => {
  if (!props.item || (!props.item.title && !props.item.description)) {
    return null; // Avoid rendering if item is null
  }

  const typeClass = `todo-card-${props.type}`;
  return (
    <div className={`card todo-card ${typeClass} shadow-sm p-3 mb-3`}>
      <div className="card-body">
        <h5 className="card-title">Title: {props.item.title}</h5>
        <p className="card-text text-muted">
          Description: {props.item.description}
        </p>

        {/* Created Date */}
        <div className="created-date">
          <span className="text-muted">
            Created Date: {new Date().toLocaleDateString()}
          </span>
        </div>
        {/* add status component */}
        {props.type == 'pending' && <PendingTodo todoId={props.item.id} />}
        {props.type == 'active' && <ActiveTodo todoId={props.item.id} />}
        {props.type == 'complete' && <CompleteTodo />}
      </div>
    </div>
  );
};

export default TodoCard;
