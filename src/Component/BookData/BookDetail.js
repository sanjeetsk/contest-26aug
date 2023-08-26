// Inside BookDetail.js
import React from 'react';
import { useParams, Link } from "react-router-dom";

// const BookDetail = ({ book, show, onClose }) => {

const BookDetail = ({ books}) => {

    const { id } = useParams();

    // Find the selected book by its ID
    const selectedBook = books.find((book) => book.id === id);

    return (
        <div>
            {selectedBook ? (
                <div>
                    <h3>{selectedBook.volumeInfo.title}</h3>
                    <p>{selectedBook.volumeInfo.description}</p>
                    <img src={selectedBook.volumeInfo.imageLinks.smallThumbnail} alt='book' />
                </div>
            ) : (
                <p>Book not found</p>
            )}

            <Link to="/">Back to Main Page</Link>

            {/* Render more books */}
            <div className="more-books">
                <h3>More Books</h3>
                {books
                    .filter((book) => book.id !== id) // Exclude the selected book
                    .slice(0, 5) // Display the first 5 books after the selected one
                    .map((book) => (
                        <div key={book.id}>
                            <h4>{book.volumeInfo.title}</h4>
                            <p>{book.volumeInfo.description}</p>
                            {/* Add more details here */}
                        </div>
                    ))}
            </div>
        </div>
    )

};

export default BookDetail;
