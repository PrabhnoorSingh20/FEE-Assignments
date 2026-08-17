import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount(count + 1);
  }

  function handleDecrease() {
    setCount(count - 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={handleIncrease}>
        Increase
      </button>

      <button onClick={handleDecrease}>
        Decrease
      </button>

      <button onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
