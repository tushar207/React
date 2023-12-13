import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

export default function Inc(){
    const [count, setCount] = useState(0);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <button onClick={() => setCount((c) => c - 1)}>-</button>
      
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Inc />);

