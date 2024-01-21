import React from 'react'
// import './style1.css';
// import './style2.css';
import A from './style1.module.css';
import B from './style2.module.css';

export default function Module_css() {
  return (
    <div>
        <h1 className={A.Tops}>Style 1</h1>
        <h1 className={B.Tops}>Style 2</h1>

    </div>
  )
}
