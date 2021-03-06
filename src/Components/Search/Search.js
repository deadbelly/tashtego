import React, { useState } from 'react';
import { getValidBooks } from '../../api_calls';
import { formatSearch } from '../../util';
import './Search.css'

export const Search = ({ setSearchResults }) => {
  const [query, setQuery] = useState('')

  const handleSearch = async event => {
    if (event.key === 'Enter') {
      setSearchResults(await getValidBooks(formatSearch(query)))
    }
  }

  return (
    <div className='search-bar'>
      <input
        value={query}
        type='text'
        onChange={event => setQuery(event.target.value)}
        onKeyUp={handleSearch}
      />
    </div>
  )
}
