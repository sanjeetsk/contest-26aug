
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Books = ({ books }) => {
  const [book, setBook] = useState([]);
  const [selectedBook, setSelectedBook] = useState(false);

  const handleBookClick = (item) => {
    setSelectedBook(true);
    setBook(item);
  };

  const handleClose = () => {
    setSelectedBook(false);
    setBook([]);
  };

  return (
    <>
      <div className="container">
        {books.map((item, index) => {
          let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
          if (thumbnail !== undefined) {
            return (
              <div className="card" key={index} onClick={() => handleBookClick(item)}>
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
        })}
      </div>
    </>
  );
};

export default Books;
