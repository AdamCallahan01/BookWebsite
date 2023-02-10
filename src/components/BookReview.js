// BookReview.js

import React from "react";

const BookReview = ({ title, author, rating, dateStarted, dateFinished, review, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>by {author}</p>
      <p>Rating: {rating}/100</p>
      <p>Date Started: {dateStarted}</p>
      <p>Date Finished: {dateFinished}</p>
      <p>{review}</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default BookReview;
