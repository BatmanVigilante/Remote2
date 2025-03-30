import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {OTP} from './components/OTP'

function App() {
  return (
    <div className='h-screen bg-blue-300'>
      <OTP></OTP>
    </div>
  );
}

export default App
