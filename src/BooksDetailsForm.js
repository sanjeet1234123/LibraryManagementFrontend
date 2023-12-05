import React, { useState, useEffect } from "react";
import "./Request.css";

function BooksDetailsForm() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch("http://localhost:8870/book");
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setBooks(data);
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while fetching books.");
    }
  };

  return (
    <div className="form-request-event-table">
      <h1 align="center">All Books</h1>
      {books.length === 0 ? (
        <p>No books available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ISBN</th>
              <th>Library ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>Version</th>
              <th>Total Copies</th>
              <th>Available Copies</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.ISBN}>
                <td>{book.isbn}</td>
                <td>{book.libId}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.publisher}</td>
                <td>{book.version}</td>
                <td>{book.totalCopies}</td>
                <td>{book.availableCopies}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default BooksDetailsForm;