import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <h2 className="siteName">Adam's Book Corner</h2>
      <ul className="navList">
        <li className="navItem">
          <Link className="navLink" to="/">Home</Link>
        </li>
        <li className="navItem">
          <Link className="navLink" to="/about">About</Link>
        </li>
        <li className="navItem">
          <Link className="navLink" to="/reviews">Reviews</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
