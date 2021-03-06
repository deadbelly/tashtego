import React, { useState } from 'react';
import { AvailableBooks } from '../AvailableBooks/AvailableBooks';
import { getValidBooks } from '../../api_calls';
import { formatSearch } from '../../util';
import './Search.css'

export const Search = ({ addBook }) => {
  const [query, setQuery] = useState('')
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (event, mobileKeyboard) => {
    if (event.key === 'Enter' || mobileKeyboard) {
      setSearchResults(await getValidBooks(formatSearch(query)))
    }
  }

  return (
    <>
      <div className='search-bar'>
        <input
          value={query}
          type='text'
          onChange={event => setQuery(event.target.value)}
          onKeyUp={handleSearch}
          onBlur={event => handleSearch(event, true)}
        />
      </div>
      <main>
        <AvailableBooks
          searchResults={searchResults}
          addBook={addBook}
        />
      </main>
    </>
  )
}
