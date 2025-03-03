import React, { useReducer } from 'react';
import './Counter.css';

const Counter = () => {
  function reducer(state, action) {
    switch (action) {
      case 'increment':
        return {
          counter: state.counter + 1,
        };
        break;
      case 'decrement':
        return {
          counter: state.counter - 1,
        };
        break;
      default:
        return {
          counter: state.counter,
        };
        break;
    }
  }
  const intialState = { counter: 0 };
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <>
      <div className="container">
        <h1>{state.counter}</h1>
        <div className="buttons">
          <button onClick={() => dispatch('increment')}>Increment</button>
          <button onClick={() => dispatch('decrement')}>Decrement</button>
        </div>
      </div>
    </>
  );
};

export default Counter;
