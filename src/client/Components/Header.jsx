import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
   
    return (
      <header className="main-header">
        <button id="home">
          <Link to="/">HOME</Link>
        </button>
        <button id="about-us">
          <Link to="/about-us">ABOUT US</Link>
        </button>
      </header>
    )
  }

export default Header