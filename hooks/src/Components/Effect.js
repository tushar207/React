import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

export default function Effect(){
    const [count, setCount] = useState(0);

    useEffect(()=>{
        setTimeout(()=> {
            setCount((count)=> count + 1);
        },1000)
    });
    return <h1> I have rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Effect />);
