import React from 'react'
import "./header.css";

export default function App(props) {
  return (
    <>
        <span className='text'>
            {props.title}
            
        </span>
        <header className="header">
            <h1 className="header-title">REACT</h1>
            <nav className="header-nav">
            <ul className="header-nav-list">
            <li className="header-nav-item"><a href="#">Home</a></li>
             <li className="header-nav-item"><a href="#">About</a></li>
             <li className="header-nav-item"><a href="#">Services</a></li>
             <li className="header-nav-item"><a href="#">Contact</a></li>
          </ul>
            </nav>
            <button onClick={()=>props.btnClick("samir","hello")}>click me</button>
        </header>
        
    </>
  )
}



