import React from "react";
import "./App.css";
import logo from "./logo.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="Navbar">
        <img src={logo} className="App-logo" alt="logo" />
        <ul className="list-item">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
