import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext();

export default function Usecontect() {
    const [user, setUser] = useState("Tops");
  return (
    <>
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
    </>
  )
}

function Component2() {
    return (
      <>
        <h1>Two</h1>
        <Component3 />
      </>
    );
  }
  
  function Component3() {
    return (
      <>
        <h1>Three</h1>
        <Component4 />
      </>
    );
  }
  
  function Component4() {
    return (
      <>
        <h1>Four</h1>
        <Component5 />
      </>
    );
  }

function Component5() {
    const user = useContext(UserContext);
    return (
      <>
        <h1>Five</h1>
        <h2>{`Hello ${user} Tech!`}</h2>
      </>
    );
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Usecontect />);
