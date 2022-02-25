import React from "react";
import { Link } from "react-router-dom";


const Header = ({ title }) => {
  return (
    <header className="main-header">
      <h1>{title}</h1>
      <button id="home">
        <Link to="/">HOME</Link>
      </button>
      <button id="about-us">
        <Link to="/about-us">ABOUT US</Link>
      </button>
      
    </header>
  );
};
Header.defaultProps = {
  title: "Welcome To Brewery Tours",
};

export default Header;

// import Button from "./Button";

// const Header = ({ title }) => {
//   return (
//     <header className="header">
//       <h1>{title}</h1>
//       <Button color="red" text="Register" />
//       <Button color="blue" text="LogIn" />
//     </header>
//   );
// };

// Header.defaultProps = {
//   title: "Welcome To Brewery Tours",
// };

// export default Header;

/* Already included file name '/home/molloyconor511/Our_Team_Project/project-team-fullstack/src/client/Components/Button.jsx' differs from file name '/home/molloyconor511/Our_Team_Project/project-team-fullstack/src/client/components/Button.jsx' only in casing.
  The file is in the program because:
    Imported via "./Button" from file '/home/molloyconor511/Our_Team_Project/project-team-fullstack/src/client/Components/Header.jsx'
    Root file specified for compilation
    Root file specified for compilation
*/