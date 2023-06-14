import React, { useEffect, useState } from 'react';
import './ReviewCards.css';
import {fetchData} from '../AwsFunctions';
import PopUp from '../components/PopUp';

// BookList component
const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  //Retrieve array of books
  const fetchDataFromDynamo = async () => {
    //takes in table name for param
    let data = await fetchData('book_reviews');

    setBooks(data);
    setLoading(false);
    console.log(books);

    return data;
  }

  //Open popup for book
  const openPopUp = (bookData) => {
    // document.getElementById(bookData.review_id).getElementsByClassName("openPopUp")[0].click();
    // console.log(x);
  }

  useEffect(() => {
    const fetchedBooks = fetchDataFromDynamo();
    // console.log("Fetched Books array: ");
    // console.log(fetchedBooks);
    // setTimeout(() => {
    //   setBooks(fetchedBooks);
    //   setLoading(false);
    // }, 2000);

  }, []);

  return (
    <div>
    <div className="book-list">
      {loading ? (
        <p>Loading...</p>
      ) : (
        books.map((book) => (
          <div onClick={() => openPopUp(book)} className="book-card" key={book.review_id} id={book.review_id}>
            <img alt="Cover" src={book.cover_url}></img>
            <h2>{book.book_title}</h2>
            <h3>{book.series_name}</h3>
            <p>Author: {book.author_name}</p>
            <h4>{book.rating}</h4>
            <p>Date Started: {book.date_started}</p>
            <p>Date Finished: {book.date_finished}</p>
            <p>Date Posted: {book.date_posted}</p>
            <p>{book.review}</p>
            <PopUp book={book}/>
          </div>
        ))
      )}
      </div>
    </div>
  );
};

export default BookList;
