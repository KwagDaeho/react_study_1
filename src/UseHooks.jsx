import React, { useState } from "react";

export default function UseHooks() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      <p>Count : {count}</p>
      <div>
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount((prev) => prev - 1)}>-</button>
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      </div>
    </div>
  );
}
