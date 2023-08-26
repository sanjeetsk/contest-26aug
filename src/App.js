
import React, { useEffect, useState } from "react";
import Navbar from "./Component/Navbar/Navbar";
import Books from "./Component/BookData/Books"
import { Routes, Route } from 'react-router-dom';
import BookDetail from "./Component/BookData/BookDetail";


const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('harry potter');


  useEffect(() => {
    fetchBooks(query);
  }, [query]);

  // const fetchBooks = async (query) => {
  //   axios.get('https://www.googleapis.com/books/v1/volumes?q=' + query + '&key=' + API_KEY)
  //     .then((res) => setBookData(res.data.items))
  //     .catch((err) => console.log(err))
  // }

  const fetchBooks = async (searchQuery) => {
    try {
      const response1 = await fetch('https://www.googleapis.com/books/v1/volumes?q=' + searchQuery + '&key=' + API_KEY)
      const data1 = await response1.json();

      const response2 = await fetch('https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes&key=' + API_KEY)
      const data2 = await response2.json();

      const mergedData = [...data1.items, ...data2.items];
      setBooks(mergedData);
    }
    catch (error) {
      console.error("Error in the fetching of books: ", error);
    }
  }

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Books books={books} />}></Route>
        <Route path="book/:id" element={<BookDetail books={books} />} />
      </Routes>
    </div>
  )
}

export default App;
