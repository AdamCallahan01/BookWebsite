// BookReviewPage.js

import React, { useState } from "react";
import { books } from "../books";
import BookReview from "../components/BookReview";

const BookReviewPage = () => {
  const [reviews, setReviews] = useState(books);

  return (
    <div>
      <h1>Book Reviews</h1>
      {reviews.map(review => (
        <BookReview
          key={review.title}
          title={review.title}
          author={review.author}
          rating={review.rating}
          dateStarted={review.dateStarted}
          dateFinished={review.dateFinished}
          review={review.review}
          description={review.description}
        />
      ))}
    </div>
  );
};

export default BookReviewPage;
