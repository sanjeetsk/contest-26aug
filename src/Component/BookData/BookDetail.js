// Inside BookDetail.js
import React from 'react';
import { useParams, Link } from "react-router-dom";

const BookDetail = ({ books }) => {

    const { id } = useParams();

    // Find the selected book by its ID
    const selectedBook = books.find((book) => book.id === id);

    return (
        <div className='bookDetail'>
            <div className='viewBook'>
                {selectedBook ? (
                    <div className='view'>
                        <img src={selectedBook.volumeInfo.imageLinks.thumbnail} alt='book' />
                        <div className='info'>
                            <h1>{selectedBook.volumeInfo.title}</h1>
                            <h3>{selectedBook.volumeInfo.authors}</h3>
                            <p className='description'>{selectedBook.volumeInfo.description}</p>
                            <div className='small'>
                                <p>Avg Rating : {selectedBook.volumeInfo.averageRating} | Rating Count : {selectedBook.volumeInfo.ratingsCount} | Publisher : {selectedBook.volumeInfo.publisher} | Language: {selectedBook.volumeInfo.language}</p>
                            </div>
                            <div className='btn'>
                                <a href={selectedBook.volumeInfo.infoLink}><button>More Info!</button></a>
                                <a href={selectedBook.volumeInfo.previewLink}><button>Now Read!</button></a>
                            </div>
                        </div>
                    </div>
                ) : (
                    <h1>Book not found</h1>
                )}

                <Link to="/" id='home'><button>Back to Main Page</button></Link>
            </div>

            {/* Render more books */}
            <h1 className='more-books'>More Books Like This</h1>
            <div className="container">
                {books
                    .filter((book) => book.id !== id) // Exclude the selected book
                    .slice(0, 6) // Display the first 5 books after the selected one
                    .map((item, index) => {
                        let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;
                        if (thumbnail !== undefined) {
                            return (
                                <div className="card" key={index}>
                                    <Link to={`/book/${item.id}`}>
                                        <img src={thumbnail} alt="books" />
                                        <div className="bottom">
                                            <h3 className="title">{item.volumeInfo.title}</h3>
                                        </div>
                                    </Link>
                                </div>
                            );
                        } else {
                            return null; // Return null for elements without thumbnail or amount
                        }
                    })
                }
            </div>
        </div>
    )

};

export default BookDetail;
