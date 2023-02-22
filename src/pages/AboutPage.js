// AboutPage.js

import React from "react";
import picture1 from "../images/bookshelf2.jpeg";

const AboutPage = () => {
    return (
      <div className="AboutPage">
        <h1>About</h1>
        <p>I read book and write about book</p>
        <p>placeholder</p>
        <div className="imageContainer">
          {/* Placeholder for an image */}
          <img src={picture1} alt="Book Review Team" />
        </div>
      </div>
    );
  };

export default AboutPage;
