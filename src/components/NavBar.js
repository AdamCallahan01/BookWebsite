import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom'; 

// NavigationBar component
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Your Website
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/reviews" className="navbar-link">
              Reviews
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/createReview" className="navbar-link">
              Create Review
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
