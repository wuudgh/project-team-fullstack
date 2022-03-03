import React from "react";
import { Link } from "react-router-dom";

const Header = ({ title }) => {
  return (
    <header className="main-header">
      <h1 className="welcomeMsg">{title}</h1>
      <button className="home">
        <Link to="/">HOME</Link>
      </button>
      <button className="aboutUs">
        <Link to="/about-us">ABOUT US</Link>
      </button>
    </header>
  );
};
Header.defaultProps = {
  title: "Welcome To Brewery Tours",
};

export default Header;

/* FOR DISCUSSION:
Maybe stick to classess instead of id's to prevent confusion in styling 
Consider moving position of buttons to top right corner? Will also need some styling
We should discuss b/g/text colour etc- possibly golden yellow background with black text in the body; 
header on a b/g of a picture
+/- login feature with mock backend?
Need to add ternary statements for searchByState input to deal with invalid text input

CHANGES MADE: 
1. Switched id's of home and about Us buttons to classes and switched to camel Case.
2. Assigned classname("welcomeMsg" to header title(line 7)) and centered the text.
3. Removed border around appContainer- don't think there's much need for same
4. Renamed "Search" component to "searchByState"
5. Removed original CSS and react logos ;
*/
