
// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = ({ onSearch }) => {

  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(query);
    }
  }

  return (
    <nav className="navbar">
      <div className="logo"><Link to="/" id='home'>FreeBooks</Link></div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={handleKeyPress} />
        <button onClick={handleSearch}><i className="fa-solid fa-magnifying-glass"></i></button>
      </div>
    </nav>
  );
};

export default Navbar;