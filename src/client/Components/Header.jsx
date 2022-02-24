import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
   
    return (
      <>
        <header className="main-header">
          <button id="about-us">
            <Link to="/">ABOUT US</Link>
          </button>
          <button id="blog">
            <Link to="/">BLOG</Link>
          </button>
          <button id="shop">
            <Link to="/">SHOP</Link>
          </button>
          <button id="brewery-tour">
            <Link to="/">BREWERY TOUR</Link>
          </button>
        </header>
        
      </>
    )
  }

export default Header