import React from "react";
// import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">ASFA</div>
      <nav>
        <ul>
          <li><a href="#why-us">Why Us</a></li>
          <li><a href="#countries">Countries</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
