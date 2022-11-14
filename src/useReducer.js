import React, { useState, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
        text: state.text
      };
    case "TOGGLETEXT":
      return {
        count: state.count,
        text: !state.text
      };
    default:
      return state;
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, text: true });

  return (
    <div>
      <div>{state.count}</div>
      <div>
        <button
          type="submit"
          onClick={() => {
            // count
            dispatch({ type: "INCREMENT" });
            //text
            dispatch({ type: "TOGGLETEXT" });
          }}
        >
          Increment
        </button>
      </div>
      <div>{state.text && <p>This is a text</p>}</div>
    </div>
  );
};

export default Reducer;
