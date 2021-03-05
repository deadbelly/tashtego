import React, { useState } from 'react';
import './App.css';
import { Search }from '../Search/Search';
import { AvailableBooks }from '../AvailableBooks/AvailableBooks';

export const App = () => {
  const [searchResults, setSearchResults] = useState([]);


  return (
    <div className="App">
      <Search setSearchResults={setSearchResults}/>
      <AvailableBooks searchResults={searchResults}/>
    </div>
  );
}
