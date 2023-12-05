import React, { useState, useEffect } from 'react';

export default function Dashboard() {
    const [books, setBooks] = useState([]);
    
      useEffect(() => {
        fetch('http://localhost:8870/book')
          .then(response => response.json())
          .then(data => setBooks(data))
          .catch(error => console.error('Error fetching books:', error));
      }, []);

    return (
        <div className="book-display">
        <h2>All Books</h2>
        <div className="books">
          {books.map((book) => (
            <div key={book.isbn} className="book">
              <img src={"images/"+book.isbn+".jpeg"} alt="bookimg1" />
              <p>Title: {book.title}</p>
              <p>Isbn: {book.isbn}</p>
            </div>
          ))}
        </div>
      </div>
    )
}