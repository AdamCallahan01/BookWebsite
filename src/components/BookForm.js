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
        await putData('book_reviews' , userData);
    }

  const [formData, setFormData] = useState({
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
    themes: [],
    format: '',
  });

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
    addDataToDynamoDB(formData);

    // Reset the form
    setFormData({
        review_id: '',
        book_title: '',
        author_name: '',
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
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Book Title</label>
        <input
          type="text"
          id="title"
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
          id="author"
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
        <label htmlFor="dateStarted">Date Started</label>
        <input
          type="date"
          id="dateStarted"
          name="date_started"
          value={formData.date_started}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="dateFinished">Date Finished</label>
        <input
          type="date"
          id="dateFinished"
          name="date_finished"
          value={formData.date_finished}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="datePosted">Date Posted</label>
        <input
          type="date"
          id="datePosted"
          name="date_posted"
          value={formData.date_posted}
          onChange={handleChange}
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
        <label htmlFor="review">Review</label>
        <textarea
          id="review"
          name="review"
          value={formData.review}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="reviewSpoilers">Review with Spoilers</label>
        <textarea
          id="reviewSpoilers"
          name="review_spoilers"
          value={formData.review_spoilers}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="summary">Summary</label>
        <textarea
          id="summary"
          name="summary"
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookForm;
