import React, { useState } from "react";
import useDebounce from "./useDebounce"; // Ensure this is in the same folder

const DebounceTest = () => {
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text, 500); // 500ms delay

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Debounce Test</h2>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          fontSize: "16px",
          marginBottom: "10px",
        }}
      />
      <button
        onClick={() => alert(`Current Value: ${debouncedText}`)}
        style={{
          display: "block",
          padding: "10px 15px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Show Debounced Value
      </button>
      <p>
        <strong>Live Input:</strong> {text}
      </p>
      <p>
        <strong>Debounced Value:</strong> {debouncedText}
      </p>
    </div>
  );
};

export default DebounceTest;
