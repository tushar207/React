import React, { useState } from "react";
import ReactDOM from "react-dom/client";


  export default function Hooks(){
    const [color, setColor] = useState("red");
    return (
        <>
          <h1>My favorite color is {color}!</h1>
          <button
            type="button"
            onClick={() => setColor("blue")}
          >Blue</button>
          <button
            type="button"
            onClick={() => setColor("red")}
          >Red</button>
          <button
            type="button"
            onClick={() => setColor("pink")}
          >Pink</button>
        </>
      );
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hooks />);