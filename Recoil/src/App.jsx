import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
      <Increase setCount={setCount} />
      <Decrease setCount={setCount} />
    </div>
  );
}

function Increase({ setCount }) {
  return <button onClick={() => setCount((c) => c + 1)}>+</button>;
}

function Decrease({ setCount }) {
  return <button onClick={() => setCount((c) => c - 1)}>-</button>;
}

export default App;
