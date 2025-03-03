import React, { useState, createContext } from 'react';
import TodoFormCard from './TodoFormCard';
import TodoList from './TodoList';
import './Styles/Todo.css';
import './Styles/TodoFormCard.css';
import './Styles/TodoList.css';
import ActiveTodoList from './ActiveTodoList';
import CompleteTodoList from './CompleteTodoList';

export const todoData = createContext();
export const activeTodoData = createContext();
export const completeTodoData = createContext();
export const todoAction = createContext();

const Todo = () => {
  const [formResult, setFormResult] = useState([]);
  const [activeResult, setActiveResult] = useState([]);
  const [completeResult, setCompleteResult] = useState([]);

  const appendNewTodoItem = (todoItem) => {
    setFormResult((prev) => [...prev, todoItem]);
  };

  const removeTodoItem = (todoId) => {
    setFormResult(formResult.filter((todo) => todo.id !== todoId));
  };

  const addActiveTodo = (todoId) => {
    console.log(todoId);
    setFormResult((prevForm) => {
      const item = prevForm.find((todo) => todo.id === todoId);
      if (!item) return prevForm; // If item is not found, return unchanged state

      // Move the item to activeResult
      setActiveResult((prev) => [...prev, item]);

      // Return the new formResult without the moved item
      return prevForm.filter((todo) => todo.id !== todoId);
    });
  };

  const addCompleteTodo = (todoId) => {
    setActiveResult((prevActive) => {
      const item = prevActive.find((todo) => todo.id === todoId);
      if (!item) return prevActive; // If item is not found, return unchanged state

      // Move the item to completeResult
      setCompleteResult((prevComplete) => [...prevComplete, item]);

      // Return the new activeResult without the moved item
      return prevActive.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className="todo-container">
      <div className={`todo-list ${formResult.length > 0 ? 'active' : ''}`}>
        <todoData.Provider value={formResult}>
          <todoAction.Provider value={{ removeTodoItem, addActiveTodo }}>
            <TodoList />
          </todoAction.Provider>
        </todoData.Provider>
      </div>

      <div className={`todo-list ${activeResult.length > 0 ? 'active' : ''}`}>
        <activeTodoData.Provider value={activeResult}>
          <todoAction.Provider value={{ addCompleteTodo }}>
            <ActiveTodoList />
          </todoAction.Provider>
        </activeTodoData.Provider>
      </div>

      <div className={`todo-list ${completeResult.length > 0 ? 'active' : ''}`}>
        <completeTodoData.Provider value={completeResult}>
          <CompleteTodoList />
        </completeTodoData.Provider>
      </div>

      {/* Todo Form (Right Side) */}
      <div>
        <TodoFormCard stateManagment={{ appendNewTodoItem }} />
      </div>
    </div>
  );
};

export default Todo;
