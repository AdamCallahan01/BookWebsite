import React, { useEffect, useState } from 'react';
import './ReviewCards.css';
import {fetchData, fetchData2, scanAllData} from '../AwsFunctions';
import PopUp from '../components/PopUp';

// BookList component
const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastKey, setLastKey] = useState(undefined); //save lastEvaluatedKey for Dynamo

  //Retrieve array of books
  const fetchDataFromDynamo = async () => {
    //takes in table name for param
    let itemList = [];
    let data = await fetchData('book_reviews');
    data.Items.forEach((data) => itemList.push(data));
    console.log(data.LastEvaluatedKey);
    setLastKey(data.LastEvaluatedKey);
    console.log(lastKey);

    setBooks(itemList);
    setLoading(false);
  }

  //load more books
  const fetchMore = async () => {
    let itemList = books;
    console.log("lastKey:");
    console.log(lastKey);
    let data = await fetchData2('book_reviews', lastKey);
    data.Items.forEach((data) => itemList.push(data));
    setLastKey(data.LastEvaluatedKey);

    setBooks(itemList);
  }

  //Open popup for book
  const openPopUp = (bookData) => {
    // if (modalOpen) {
      document.getElementById(bookData.review_id).getElementsByClassName("openPopUp")[0].click();
    // }
  }

  //helper function for sorting the results
  function sortHelper( a, b ) {
    if ( a.date_finished < b.date_posted ){
      return 1;
    }
    if ( a.date_posted > b.date_posted ){
      return -1;
    }
    return 0;
  }

  //organize results by date posted
  const sortResults = () => {
    let itemList = books;
    itemList.sort(sortHelper);
    setBooks(itemList);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }

  //NEW CODE
  //Since querying is dumb we refactor
  const getDynamoData = async () => {
    let data = await scanAllData();
    data.sort(sortHelper);
    setBooks(data);
    setLoading(false);
  }

  useEffect(() => {
    //OLD
    //fetchDataFromDynamo();

    //NEW
    getDynamoData();

    // console.log("Fetched Books array: ");
    // console.log(fetchedBooks);
    // setTimeout(() => {
    //   setBooks(fetchedBooks);
    //   setLoading(false);
    // }, 2000);

  }, []);

  return (
    <div>
      <button onClick={() => sortResults()}>Sort</button>
    <div className="book-list">
      {loading ? (
        <p>Loading...</p>
      ) : (
        books.map((book) => (
          <div key={book.review_id}>
            <div onClick={() => openPopUp(book)} className="book-card">
              <h2>{book.book_title}</h2>
              <img alt="Cover" src={book.cover_url}></img>
              <h5>{book.series_name} #{book.series_number}</h5>
              <p>Author: {book.author_name}</p>
              <h4>Score: {book.rating}</h4>
              {/* <p>Date Started: {book.date_started}</p>
              <p>Date Finished: {book.date_finished}</p> */}
              <p>Date Posted: {book.date_posted}</p>
              {/* <p>{book.review}</p> */}
            </div>
            <div className="PopUpContainer" id={book.review_id}>
              <PopUp book={book}/>
            </div>
          </div>
        ))
      )}
      </div>
      <button onClick={() => fetchMore()}>LOAD MORE...</button>
    </div>
  );
};

export default BookList;
