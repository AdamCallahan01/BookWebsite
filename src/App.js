import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BookReviewPage from "./pages/BookReviewPage";
import "./App.css";

/*
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/reviews" element={<BookReviewPage />} />
      </Routes>
    */

const App = () => {
  return (
    <Router>
      <div>
      <nav className="navbar">
        <ul className="navList">
          <li className="navItem">
            <Link to="/" className="navList">Home</Link>
          </li>
          <li className="navItem">
            <Link to="/about" className="navList">About</Link>
          </li>
          <li className="navItem">
            <Link to="/reviews" className="navList">Reviews</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/reviews" element={<BookReviewPage />} />
      </Routes>
      </div>
    </Router>
  );
};


export default App;