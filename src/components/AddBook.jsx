import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./AddBook.css";

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: 1,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/books");
  };

  return (
    <form onSubmit={handleSubmit} className="add-book-form">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        required
        className="form-input"
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={formData.author}
        onChange={handleChange}
        required
        className="form-input"
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
        className="form-input"
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
        className="form-textarea"
      ></textarea>
      <input
        type="number"
        name="rating"
        min="1"
        max="5"
        value={formData.rating}
        onChange={handleChange}
        required
        className="form-input"
      />
      <button type="submit" className="submit-button">Add Book</button>
    </form>
  );
};

export default AddBook;