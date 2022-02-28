import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
   
    return (
      <header className="main-header">
        <button id="home-button">
          <Link to="/">HOME</Link>
        </button>
        <button id="about-us-button">
          <Link to="/about-us">ABOUT US</Link>
        </button>
      </header>
    )
  }

export default Header
