import React, { useReducer } from "react";

export default function UseReducer() {
  const initialState = { count: 0, name: "Daeho" };
  function reducer(state, action) {
    switch (action.type) {
      case "reset":
        return initialState;
      case "increment":
        return { count: state.count + 1, name: "Plus" };
      case "decrement":
        return { count: state.count - 1, name: "Minus" };
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>Count [Reducer] : {state.count}</p>
      <p>Name [Reducer] : {state.name}</p>
      <div>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
      </div>
    </div>
  );
}
