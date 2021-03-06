import React, { useState } from 'react';
import './App.css';
import { Search } from '../Search/Search';
import { AvailableBooks } from '../AvailableBooks/AvailableBooks';
import { NavBar } from '../NavBar/NavBar';

export const App = () => {
  const [readingList, setReadingList] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const addBook = newBook => {
    if (!readingList.filter(book => book.id === newBook.id).length) {
      setReadingList([ ...readingList, newBook])
    }
  }


  return (
    <div className="App">
      <Search setSearchResults={setSearchResults}/>
      <div className='search-results'>
        <AvailableBooks
          searchResults={searchResults}
          addBook={addBook}
        />
      </div>
      <NavBar />
    </div>
  );
}
