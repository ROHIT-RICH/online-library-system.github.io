import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import "./BookDetails.css";
import mockBooks from "../utility/mockBooks";

const BookDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState(null);
  
    useEffect(() => {
      const bookData = mockBooks.find((b) => b.id === parseInt(id));
      setBook(bookData);
    }, [id]);
  
    if (!book) return <p>Loading book details...</p>;
  
    return (
      <div className="book-details">
        <img src={book.coverImg} alt="" />
        <h1>{book.title}</h1>
        <p>Author: {book.author}</p>
        <p>Description: {book.description}</p>
        <p>Rating: {book.rating}/5</p>
        <button onClick={() => navigate(-1)} className="back-button">Back to Browse</button>
      </div>
    );
  };
  
  export default BookDetails;