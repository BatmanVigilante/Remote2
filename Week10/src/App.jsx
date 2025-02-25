// // ugly code
// import React, { useState } from "react";

// function Stopwatch() {
//   const [time, setTime] = useState(0);
//   const [intervalId, setIntervalId] = useState(null); // Use state to store the interval ID

//   const startTimer = () => {
//     if (intervalId !== null) return; // Already running, do nothing

//     const newIntervalId = setInterval(() => {
//       setTime((prevTime) => prevTime + 1);
//     }, 1000);

//     // Store the interval ID in state (triggers re-render)
//     setIntervalId(newIntervalId);
//   };

//   const stopTimer = () => {
//     clearInterval(intervalId);

//     // Clear the interval ID in state (triggers re-render)
//     setIntervalId(null);
//   };

//   return (
//     <div>
//       <h1>Timer: {time}</h1>
//       <button onClick={startTimer}>Start</button>
//       <button onClick={stopTimer}>Stop</button>
//     </div>
//   );
// }

// export default Stopwatch;
import React, { useEffect, useState } from "react";

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Incrase count={count} setCount={setCount} />
      <Decrease count={count} setCount={setCount} />
      <Value count={count} setCount={setCount} />
    </>
  );
}

function Decrease({ count, setCount }) {
  return <button onClick={() => setCount(count - 1)}>Decrease</button>;
}

function Incrase({ count, setCount }) {
  return <button onClick={() => setCount(count + 1)}>Increase</button>;
}

function Value({ count }) {
  return <p>Count: {count}</p>;
}

// App Component
const App = () => {
  return (
    <div>
      <Parent />
    </div>
  );
};

export default App;
