import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
  <div className="h-screen bg-white dark:bg-black flex justify-center items-center">
    <h1 className="text-black dark:text-white">Hi there</h1>
    <button
      onClick={() => {
        document.querySelector("html").classList.toggle("dark");
      }}
      className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded-lg mt-4"
    >
      Toggle theme
    </button>
  </div>
);}

export default App;
