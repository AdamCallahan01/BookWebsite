// HomePage.js

import React from "react";
import picture1 from "../images/bookshelf1.jpeg";
import Footer from "../components/footer";


const HomePage = () => {
    return (
      <div className="HomePage">
        <h1>Welcome to Adam's Book Corner</h1>
        <p>(Name created by Sasha Burckckckchardt)</p>
        <p>I read a lot of fantasy books and write about them, sometimes seriously somteimtes not</p>
        <div className="imageContainer">
          {/* Placeholder for an image */}
          <img src={picture1} alt="Book Cover" />
        </div>
        <div>
          <h3>FILLER CONTENT</h3>
          <p>
            A
            A
            A
            A

            A

            Adam


            A

          </p>
        </div>
        <Footer />
      </div>
    );
  };
export default HomePage;
