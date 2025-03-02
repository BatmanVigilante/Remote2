import React, { createContext, useContext, useState } from "react";

// Create Context
const CountContext = createContext();

// Context Provider Component
function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

// Individual Components
function Decrease() {
  const { count, setCount } = useContext(CountContext);
  return <button onClick={() => setCount(count - 1)}>Decrease</button>;
}

function Incrase() {
  const { count, setCount } = useContext(CountContext);
  return <button onClick={() => setCount(count + 1)}>Increase</button>;
}

function Value() {
  const { count } = useContext(CountContext);
  return <p>Count: {count}</p>;
}

// Parent Component
function Parent() {
  return (
    <>
      <Incrase />
      <Decrease />
      <Value />
    </>
  );
}

// App Component
const App = () => {
  return (
    <CountContextProvider>
      <Parent />
    </CountContextProvider>
  );
};

export default App;
