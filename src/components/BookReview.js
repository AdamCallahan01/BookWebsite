import React, { useState } from "react";
import {books} from "../books";

const BookReview = () => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="reviewsContainer">
      {books.map((book, index) => (
        <div key={index} className="bookReviewCard">
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Rating: {book.rating}</p>
          <p>Date Started: {book.dateStarted}</p>
          <p>Date Finished: {book.dateFinished}</p>
          <p>{book.review}</p>
          <div className="descriptionContainer">
            <p>
              Description:{" "}
              <span
                className="descriptionToggler"
                onClick={() => setShowDescription(!showDescription)}
              >
                &#9660;
              </span>
            </p>
            {showDescription && <p>{book.description}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookReview;
