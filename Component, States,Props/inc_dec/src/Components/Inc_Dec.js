import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

export default function Inc_Dec(){
    const [count, setCount] = useState(0);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)} id="Inc">Increment</button>
      <button onClick={() => setCount((c) => c - 1)} id="Dec">Decrement</button>
      <button onClick={() => setCount((c) => c = 0)} id="Reset">Reset</button>
      
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Inc_Dec />);
