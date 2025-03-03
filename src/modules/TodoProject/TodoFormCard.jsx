import React, { useEffect, useRef, useState } from 'react';
import './Styles/TodoFormCard.css';

const TodoFormCard = ({ stateManagment }) => {
  // Declare state management
  let todoId = useRef(1);
  const [todoFormData, setTodoFormData] = useState({
    title: '',
    description: '',
  });
  const [todo, setTodo] = useState({ Id: 0, title: '', description: '' });
  const [errors, setErrors] = useState({ title: '', description: '' });

  //Declare function to handle changes
  const handleFieldChange = (todoNewData) => {
    setTodoFormData((prev) => ({ ...prev, ...todoNewData }));
  };

  const handleSubmitForm = () => {
    setTodo((prev) => {
      const updatedTodo = { ...prev, ...todoFormData, id: todoId.current };
      const hasErrors = handleErrors(updatedTodo);
      if (!hasErrors) {
        setTodoFormData({ title: '', description: '' });
        todoId.current += 1;
        return updatedTodo;
      }
    });
  };

  const handleErrors = (todoItem) => {
    let isValid = false;
    setErrors({ title: '', description: '' });
    if (!todoItem.title.trim()) {
      setErrors((prev) => ({ ...prev, title: 'Invalid title' }));
      isValid = true;
    }
    if (!todoItem.description.trim()) {
      setErrors((prev) => ({ ...prev, description: 'Invalid description' }));
      isValid = true;
    }
    return isValid;
  };
  useEffect(() => {
    if (todo && todo.title && todo.description) {
      stateManagment.appendNewTodoItem(todo);
    }
  }, [todo]);

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card p-4 shadow-sm todo-form" style={{ width: '350px' }}>
        <h2 className="text-center mb-3">Add To-Do</h2>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            value={todoFormData.title}
            onChange={(e) => handleFieldChange({ title: e.target.value })}
          />
          <div className="text-danger small mt-1" role="alert">
            {errors.title}
          </div>
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Description"
            value={todoFormData.description}
            onChange={(e) => handleFieldChange({ description: e.target.value })}
          />
          <div className="text-danger small mt-1" role="alert">
            {errors.description}
          </div>
        </div>
        <button className="btn btn-primary w-100" onClick={handleSubmitForm}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default TodoFormCard;
