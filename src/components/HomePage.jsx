import React from "react";
import { Link } from "react-router-dom";
// import "./HomePage.css";

const HomePage = () => {
  const categories = ["Fiction", "Dystopian", "Classic", "Adventure"];
  const popularBooks = [
    {
      id: 11,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      coverImg:"https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg",
    },
    {
      id: 12,
      title: "A Brief History of Time",
      author: "Stephen Hawking",
      coverImg:"https://logicwork.in/wp-content/uploads/2022/08/A-Brief-History-Of-Time-by-Stephen-Hawking-985x1536.jpeg",
    },
    {
      id: 13,
      title: "Dune",
      author: "Frank Herbert",
      coverImg:"https://cinemadailyus.com/wp-content/uploads/2023/11/Dune-Part-Two-2023-movie-poster.jpg",
    },
    {
      id: 14,
      title: "The Hound of the Baskervilles",
      author: "Arthur Conan Doyle",
      coverImg:"https://i5.walmartimages.com/asr/b86735e8-0406-4423-8b76-a9acfa12b8df_2.02a0838260a05b6b920537d1bdff9f01.jpeg",
    },
  ];

  return (
    <>
      <div className="home">
        <h1>Welcome to the Online Library</h1>
      </div>
      <div className="categories-main">
        <ul className="categories">
          {categories.map((category) => (
            <li key={category} className="category-item">
              <Link to={`/books/${category}`}>{category}</Link>
            </li>
          ))}
          <li className="category-item">
            <Link to={'/add-book'}>Add Book</Link>
          </li>
        </ul>
      </div>
      <div className="popular-books">
        <h2>Popular Books</h2>
        <ul className="book">
          {popularBooks.map((book) => (
            <li key={book.id} className="book-item">
                <img src={book.coverImg} alt="" />
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <Link to={`/book/${book.id}`}>View Details</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HomePage;
