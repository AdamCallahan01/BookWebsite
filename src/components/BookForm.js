import React, { useState } from 'react';
import './BookForm.css';
import {putData} from '../AwsFunctions';
var uuid = require('uuid'); //generate unique primary keys for Dynamo

// BookForm component
const BookForm = () => {
    //Submit to DynamoDB
    const addDataToDynamoDB = async (formData) => {
        const userData = {
            review_id: uuid.v1(),
            book_title: formData.book_title,
            author_name: formData.author_name,
            series_name: formData.series_name,
            series_number: formData.series_number,
            cover_url: formData.cover_url,
            date_started: formData.date_started,
            date_finished: formData.date_finished,
            date_posted: formData.date_posted,
            rating: formData.rating,
            review: formData.review,
            review_spoilers: formData.review_spoilers,
            summary: formData.summary,
            themes: formData.themes,
            format: formData.format
        }
        let status = await putData('book_reviews' , userData);
        if (status) { //successfully put data
          setStatus({ type: 'success' });
        } else {  //error in DB
          setStatus({ type: 'error' });
        }
        return 0;
    }

  //FOrm Data
  const [formData, setFormData] = useState({
    review_id: '',
    book_title: '',
    author_name: '',
    series_number: '',
    cover_url: '',
    date_started: '',
    date_finished: '',
    date_posted: '',
    rating: '',
    review: '',
    review_spoilers: '',
    summary: '',
    series_name: '',
    themes: [],
    format: '',
  });
  //Show Success
  const [status, setStatus] = useState(undefined);

  const test = () => {
    setStatus({ type: 'success' });
    console.log("test");
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any actions with the form data
    console.log(formData);
    //Upload to DynamoDB
    //To make the code wait I added a variable declaration
    //must be a beter way to do this
    let x = addDataToDynamoDB(formData);
    //scroll to top
    window.scroll(0,0);

    // Reset the form
    //ONLY if successfully uploaded item
    if (status?.type === 'success') {
      document.getElementsByClassName('statusMessageSuccess')[0].style.display = 'block';
      document.getElementsByClassName('statusMessageError')[0].style.display = 'none';
      setFormData({
          review_id: '',
          book_title: '',
          author_name: '',
          cover_url: '',
          date_started: '',
          date_finished: '',
          date_posted: '',
          rating: '',
          review: '',
          review_spoilers: '',
          summary: '',
          series_name: '',
          series_number: '',
          themes: [],
          format: '',
      });
    } else {
      document.getElementsByClassName('statusMessageError')[0].style.display = 'block';
      document.getElementsByClassName('statusMessageSuccess')[0].style.display = 'none';
      console.log('TESTING');
    }
  };

  return (
    <>
    <div className="headerText">
      <h3>Create A Review</h3> <br/>
      <h3 className="statusMessageSuccess">SUCCESS!</h3>
      <h3 className="statusMessageError">ERROR!</h3>
    </div>
    <form className="book-form" onSubmit={handleSubmit}>
    {status?.type === 'success' && <h3 className="statusMessageSuccess">SUCCESS!</h3>}
      {status?.type === 'error' && (
        <h3 className="statusMessageError">ERROR!</h3>
      )}
      <div className="form-group">
        <label htmlFor="title">Book Title</label>
        <input
          type="text"
          id="book_title"
          name="book_title"
          value={formData.book_title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="author">Author Name</label>
        <input
          type="text"
          id="author_name"
          name="author_name"
          value={formData.author_name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="series_name">Series Name</label>
        <input
          type="text"
          id="series_name"
          name="series_name"
          value={formData.series_name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="series_number">Series Number</label>
        <input
          type="number"
          id="series_number"
          name="series_number"
          value={formData.series_number}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          id="rating"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="cover_url">Book Cover URL</label>
        <input
          type="text"
          id="cover_url"
          name="cover_url"
          value={formData.cover_url}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="date_started">Date Started</label>
        <input
          type="date"
          id="date_started"
          name="date_started"
          value={formData.date_started}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="date_finished">Date Finished</label>
        <input
          type="date"
          id="date_finished"
          name="date_finished"
          value={formData.date_finished}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="date_posted">Date Posted</label>
        <input
          type="date"
          id="date_posted"
          name="date_posted"
          value={formData.date_posted}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="review">Review</label>
        <textarea
          id="review"
          name="review"
          className="review"
          value={formData.review}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="review_spoilers">Review with Spoilers</label>
        <textarea
          id="review_spoilers"
          name="review_spoilers"
          className="review"
          value={formData.review_spoilers}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="summary">Summary</label>
        <textarea
          id="summary"
          name="summary"
          className="review"
          value={formData.summary}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="themes">Themes (comma-separated)</label>
        <input
          type="text"
          id="themes"
          name="themes"
          value={formData.themes.join(', ')}
          onChange={(e) =>
            setFormData((prevFormData) => ({
              ...prevFormData,
              themes: e.target.value.split(',').map((theme) => theme.trim()),
            }))
          }
        />
      </div>
      <div className="form-group">
        <label htmlFor="format">Format</label>
        <select
          id="format"
          name="format"
          value={formData.format}
          onChange={handleChange}
        >
          <option value="">Select a format</option>
          <option value="audiobook">Audiobook</option>
          <option value="ebook">Ebook</option>
          <option value="physical">Physical book</option>
        </select>
      </div>
      <button type="submit" className="submitButton">Submit</button>
    </form>
    </>
  );
};

export default BookForm;
