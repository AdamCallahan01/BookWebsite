import React, { useState } from "react";
import { books } from "../books";

const BookReview = () => {
  const [showDescription, setShowDescription] = useState({});

  const handleDescriptionToggle = (index) => {
    setShowDescription({
      ...showDescription,
      [index]: !showDescription[index],
    });
  };

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
              Summary (w/ spoilers):{" "}
              <span
                className="descriptionToggler"
                onClick={() => handleDescriptionToggle(index)}
              >
                &#9660;
              </span>
            </p>
            {showDescription[index] && <p>{book.summary}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookReview;
