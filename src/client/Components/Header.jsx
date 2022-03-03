import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
   
    return (
      <header className="main-header">
        <h1 id='header-h1'>W & C BREWERY</h1>
        <div id='header-buttons'>
        <button id="home-button">
          <Link id='home-link' to="/">HOME</Link>
        </button>
        <button id="about-us-button">
          <Link id='about-us-link' to="/about-us">ABOUT US</Link>
        </button>
        </div> 
      </header>
    )
  }

export default Header



//src/client/Components/Header.jsx