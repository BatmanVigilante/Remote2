import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex justify-evenly">
        <div className="bg-sky-950 ">Div1</div>
        <div className="bg-red-500">Div2</div>
        <div className="bg-blue-600">Div3</div>
      </div>
    </>
  );
}

export default App
