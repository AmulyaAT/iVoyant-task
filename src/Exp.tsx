import React, { useReducer } from 'react';

// Define state
type State= {
  count: number;
}

// Define actions
type Action = { type: 'increment' } | { type: 'decrement' };

// Create the reducer function
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error('Unhandled action type');
  }
};

const Counter: React.FC = () => {
  // useReducer to manage state
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};

export default Counter;
