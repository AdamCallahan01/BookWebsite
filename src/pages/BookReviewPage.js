// BookReviewPage.js

import React, { useState } from "react";
import { books } from "../books";
import BookReview from "../components/BookReview";

const BookReviewPage = () => {
  return (
    <div>
      <h1>Book Reviews</h1>
      <BookReview books={books} />
    </div>
  );
};

export default BookReviewPage;
