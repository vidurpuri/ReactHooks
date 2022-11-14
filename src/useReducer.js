import React, { useState } from "react";

const Reducer = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState(true);

  return (
    <div>
      <div>{count}</div>
      <div>
        <button
          type="submit"
          onClick={() => {
            setCount(count + 1);
            setText(!text);
          }}
        >
          Increment
        </button>
      </div>
      <div>{text && <p>This is a text</p>}</div>
    </div>
  );
};

export default Reducer;
