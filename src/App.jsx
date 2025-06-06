import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <>
      <div className="counter">
        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>Increament</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </>
  );
}

export default App;
