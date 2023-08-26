
import { Link } from "react-router-dom";

const Books = ({ books }) => {

  return (
    <>
      <div className="container">
        {books.map((item, index) => {
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
        })}
      </div>
    </>
  );
};

export default Books;
