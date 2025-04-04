import React from "react";
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from "recoil";

const count = atom({
  key: "countState", // Unique ID
  default: 0, // Initial value
});

function Parent() {
  return (
    <RecoilRoot>
      <Increase />
      <Decrease />
      <Value />
    </RecoilRoot>
  );
}

function Decrease() {
  const setCount = useSetRecoilState(count);
  return (
    <button onClick={() => setCount((prevCount) => prevCount - 1)}>
      Decrease
    </button>
  );
}

function Increase() {
  const setCount = useSetRecoilState(count);
  return (
    <button onClick={() => setCount((prevCount) => prevCount + 1)}>
      Increase
    </button>
  );
}

function Value() {
  const countValue = useRecoilValue(count);
  return <p>Count: {countValue}</p>;
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
