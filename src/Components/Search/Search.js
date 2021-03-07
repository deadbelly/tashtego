import React, { useState } from 'react';
import { AvailableBooks } from '../AvailableBooks/AvailableBooks';
import { Error } from '../Error/Error';
import { Loader } from '../Loader/Loader';
import { getValidBooks } from '../../api_calls';
import { formatSearch, useLocalStorage } from '../../util';
import './Search.css'
import PropTypes from 'prop-types';

export const Search = ({ addBook, checkIfListed }) => {
  const [query, setQuery] = useLocalStorage('query', '');
  const [searchResults, setSearchResults] = useLocalStorage('searchResults', []);
  const [error, setError] = useState(null);

  const handleSearch = async (event, mobileSearch) => {
    event.preventDefault();
    if (event.key === 'Enter' || mobileSearch) {
      event.target.blur();
      setSearchResults([]);
      setSearchResults(
        await getValidBooks(formatSearch(query))
          // .then(response => setError(null))
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
      { searchResults.length &&
        <AvailableBooks
          searchResults={searchResults}
          addBook={addBook}
          checkIfListed={checkIfListed}
        />
      }
      { error &&
        <Error error={error} />
      }
      { !searchResults.length && !error &&
        <Loader />
      }
    </>
  )
}

Search.propTypes = {
  addBook: PropTypes.func,
  checkIfListed: PropTypes.func
}
