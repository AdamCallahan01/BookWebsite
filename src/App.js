import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

const books = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    rating: 9
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    rating: 8
  },
  {
    id: 3,
    title: '1984',
    author: 'George Orwell',
    rating: 10
  }
];

function Home() {
  return (
    <div className="Home">
      <h1>Welcome to the Book Reviewer</h1>
      <p>Here you can find reviews and ratings of some of the best books out there.</p>
    </div>
  );
}

function About() {
  return (
    <div className="About">
      <h1>About the Reviewer</h1>
      <p>I'm a bibliophile who loves to read and share my thoughts on books. I've been reading for as long as I can remember and want to share my passion with others. My goal is to help others find great books to read and to encourage more people to pick up a good book and lose themselves in its pages.</p>
    </div>
  );
}

function Book({ book }) {
  return (
    <div className="Book">
      <img src={`/images/${book.title.replace(' ', '-')}.jpg`} alt={`Cover of ${book.title}`} />
      <h2>{book.title}</h2>
      <p>By {book.author}</p>
      <p>Rated: {book.rating} / 10</p>
    </div>
  );
}


function Books() {
  return (
    <div className="Books">
      <h1>Books</h1>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
