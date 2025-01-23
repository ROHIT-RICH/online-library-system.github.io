import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import "./BrowseBooks.css";
import mockBooks from "../utility/mockBooks";

const BrowseBooks = () => {
    const { category } = useParams();
    const [search, setSearch] = useState("");
    const [books, setBooks] = useState([]);
  
    useEffect(() => {
      setBooks(mockBooks);
    }, []);
  
    const filteredBooks = books.filter(
      (book) =>
        (!category || book.category === category) &&
        (book.title.toLowerCase().includes(search.toLowerCase()) ||
          book.author.toLowerCase().includes(search.toLowerCase()))
    );
  
    return (
      <div className="browse">
        <h1>Browse Books</h1>
        <input
          type="text"
          placeholder="Search by title or author"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />
        <ul className="book-list">
          {filteredBooks.map((book) => (
            <li key={book.id} className="book-item">
              <img src={book.coverImg} alt="" />
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <Link to={`/book/${book.id}`}>View Details</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default BrowseBooks;