import React from 'react'
import './AvailableBooks.css'
import { formatAuthors } from '../../util'
import PropTypes from 'prop-types';

export const AvailableBooks = ({ searchResults, addBook, checkIfListed }) => {

  const bookList = searchResults.map(book =>
      <div
        key={book.id}
        className={`book ${checkIfListed(book.id)}`}
        tabIndex='0'
        onClick={() => addBook(book)}
      >
        <img
          className='cover'
          src={book.cover}
          alt={book.alt}
        />
        <h2>{book.title}</h2>
        <h3> by {formatAuthors(book.authors)}</h3>
        <div className='small-details'>
          <p> First Published: {book.pubYear}</p>
          <p> Editions: {book.editions}</p>
        </div>
      </div>
    )

  return (
    <div className='search-results'>
      {bookList}
    </div>
  )
}

AvailableBooks.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.object),
  addBook: PropTypes.func,
  checkIfListed: PropTypes.func
}
