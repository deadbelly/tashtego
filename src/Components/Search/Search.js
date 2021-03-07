import React, { useState } from 'react';
import { AvailableBooks } from '../AvailableBooks/AvailableBooks';
import { getValidBooks } from '../../api_calls';
import { formatSearch } from '../../util';
import './Search.css'

export const Search = ({ addBook }) => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (event, mobileSearch) => {
    event.preventDefault();
    if (event.key === 'Enter' || mobileSearch) {
      event.target.blur();
      setSearchResults([]);
      setSearchResults(await getValidBooks(formatSearch(query)));
    }
  }

  return (
    <>
      <form
        className='search-bar'
        action='.'
        onSubmit={event => handleSearch(event, true)}
      >
        <input
          name='search'
          value={query}
          type='search'
          onChange={event => setQuery(event.target.value)}
          onKeyUp={handleSearch}
        />
      </form>
      <main>
        <AvailableBooks
          searchResults={searchResults}
          addBook={addBook}
        />
      </main>
    </>
  )
}
