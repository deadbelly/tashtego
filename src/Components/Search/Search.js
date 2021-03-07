import React from 'react';
import { AvailableBooks } from '../AvailableBooks/AvailableBooks';
import { getValidBooks } from '../../api_calls';
import { formatSearch, useLocalStorage } from '../../util';
import './Search.css'
import PropTypes from 'prop-types';

export const Search = ({ addBook, checkIfListed, setError }) => {
  const [query, setQuery] = useLocalStorage('query', '');
  const [searchResults, setSearchResults] = useLocalStorage('searchResults', []);

  const handleSearch = async (event, mobileSearch) => {
    event.preventDefault();
    if (event.key === 'Enter' || mobileSearch) {
      event.target.blur();
      setSearchResults([]);
      setSearchResults(
        await getValidBooks(formatSearch(query))
          .catch(err => {
            console.log(err)
            setError(err)
          })
      );
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
      { searchResults &&
        <AvailableBooks
          searchResults={searchResults}
          addBook={addBook}
          checkIfListed={checkIfListed}
        />
      }
    </>
  )
}

Search.propTypes = {
  addBook: PropTypes.func,
  checkIfListed: PropTypes.func
}
