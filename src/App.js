import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BookReviewPage from "./pages/BookReviewPage";
import NavBar from "./components/NavBar";
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
        <NavBar />
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