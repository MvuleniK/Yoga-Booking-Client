import React from "react";
import "../styles/Header.css";

const Header = (props) => {

  return (
    <div className="pageHeader">
      <div className="banner">
        <h1>Welcome to our Yoga Studio</h1>
        <p>Find peace and harmony through the practice of yoga</p>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/teachers">Teachers</a>
          </li>
          <li>
            <a href="/showClassList">Classes</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
