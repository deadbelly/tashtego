import React, { useState } from 'react';
import { getValidBooks } from '../../api_calls';
import { formatSearch } from '../../util';

export const Search = () => {
  const [query, setQuery] = useState('')

  const handleSearch = event => {
    if (event.key === 'Enter') {
      getValidBooks(formatSearch(query))
    }
  }

  return (
    <input
      value={query}
      type='text'
      onChange={event => setQuery(event.target.value)}
      onKeyUp={handleSearch}
    />
  )
}
