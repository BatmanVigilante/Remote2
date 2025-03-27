import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex justify-between">
        <div className="red">Div1</div>
        <div className="bg-red">Div1</div>
        <div className="bg-red">Div1</div>
      </div>
    </>
  );
}

export default App
