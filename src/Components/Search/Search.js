import React, { useState } from 'react';

export const Search = () => {
  const [query, setQuery] = useState('')

  return (
    <input
      value={query}
      type='text'
      onChange={event => setQuery(event.target.value)}
    />
  )
}
