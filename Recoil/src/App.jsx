import React, { createContext, useContext, useState } from "react";
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom, evenSelector } from "./store/atoms/counter";




function Parent() {
  return (
    <RecoilRoot>
    <Buttons></Buttons>
    <Counter></Counter>
    <IsEven></IsEven>
    </RecoilRoot>
  );
}

function Buttons() {
  const setCount = useSetRecoilState(counterAtom);
  return (
    <>
    <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
    </>
  );
}

function Counter() {
  const count = useRecoilValue(counterAtom);
  return <div>Count: {count}</div>;
}

function IsEven() {
  const even = useRecoilValue(evenSelector);
  return <div>{even ? "Even" : "Odd"}</div>;
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
