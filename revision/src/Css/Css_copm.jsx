import React from 'react'

import './style1.css';
import './style2.css';

function Css_comp() {
    
  const internal={color:"red",backgroundColor:'blue'}
  return (
    <div>
        <h1>Css_comp</h1>

        <h1 style={{color:"green",backgroundColor:'gray'}}>Inline Css</h1>
        <h1 style={internal}>Internal Css</h1>

        <h1 className='tops'>External Css</h1>
    </div>
  )
}

export default Css_comp
