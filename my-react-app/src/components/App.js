import React,{ useState } from "react";

const App = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  return (
    <>
      <div>counter:{count}</div>
      <button onClick={increment} >+1</button>
      <button onClick={decrement} >-1</button>
    </>
  );
};

export default App;
