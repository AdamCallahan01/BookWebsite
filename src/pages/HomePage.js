// HomePage.js

import React from "react";
import picture1 from "../images/chessBoard.png";


const HomePage = () => {
    return (
      <div className="HomePage">
        <h1>Welcome to the Book Review Site!</h1>
        <p>Here, you can find reviews of books written by our team of book enthusiasts.</p>
        <p>Take a look at our reviews and find your next favorite book!</p>
        <div className="imageContainer">
          {/* Placeholder for an image */}
          <img src={picture1} alt="Book Cover" />
        </div>
      </div>
    );
  };
export default HomePage;
