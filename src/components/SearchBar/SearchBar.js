import React, { useState } from 'react';
import './styles.css';

const SearchBar = () => {
  const [movieName, setMovieName] = useState('');

  const handleMovieNameChange = (event) => {
    setMovieName(event.target.value);
  };

  const _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('do validate');
    }
  }

  return (
    <>
    <div id='search-bar-container'>
      <input placeholder='Type movie name' type="text" id="searchInput" value={movieName} onChange={handleMovieNameChange} onKeyDown={_handleKeyDown}/>
    </div>
    </>
  );
};

export default SearchBar;