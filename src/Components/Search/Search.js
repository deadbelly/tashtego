import React, { useState } from 'react';
import { AvailableBooks } from '../AvailableBooks/AvailableBooks';
import { Error } from '../Error/Error';
import { Loader } from '../Loader/Loader';
import { getValidBooks } from '../../api_calls';
import { formatSearch } from '../../util';
import { usePromiseTracker } from "react-promise-tracker";
import './Search.css'
import PropTypes from 'prop-types';

export const Search = ({ addBook, checkIfListed, query,
  setQuery, searchResults, setSearchResults }) => {
  const [error, setError] = useState(null);

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
          placeholder='search for a book'
          onChange={event => setQuery(event.target.value)}
          onKeyUp={handleSearch}
        />
      </form>
      { !usePromiseTracker().promiseInProgress &&
        searchResults &&
        <AvailableBooks
          searchResults={searchResults}
          addBook={addBook}
          checkIfListed={checkIfListed}
        />
      }
      { error &&
        <Error error={error} />
      }
      <Loader />
    </>
  )
}

Search.propTypes = {
  addBook: PropTypes.func,
  checkIfListed: PropTypes.func,
  query: PropTypes.string,
  setQuery: PropTypes.func,
  searchResults: PropTypes.arrayOf(PropTypes.object),
  setSearchResults: PropTypes.func
}
