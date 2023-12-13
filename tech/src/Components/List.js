import React from "react";
import ReactDOM from "react-dom/client";
function Car(props) {
  return <li>I am a {props.brand}</li>;
}

export default function List() {
  const cars = ["Ford", "BMW", "Audi"];
  return (
    <>
      <div>hello</div>
      <ul>
        {cars.map((car) => (
          <Car brand={car} />
        ))}
      </ul>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<List />);
