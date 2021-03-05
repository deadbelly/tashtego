import React, { useState } from 'react';
import './App.css';
import { Search }from '../Search/Search';

export const App = () => {
  const [searchResults, setSearchResults] = useState([]);


  return (
    <div className="App">
      <Search setSearchResults={setSearchResults}/>
    </div>
  );
}
