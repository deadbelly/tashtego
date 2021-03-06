import React from 'react'
import './AvailableBooks.css'

export const AvailableBooks = ({ searchResults, addBook }) => {

  const bookList = searchResults.map(book =>
      <div
        key={book.id}
        className='book'
        tabIndex='0'
        onClick={() => addBook(book)}
      >
        <img
          className='cover'
          src={book.cover}
          alt={book.alt}
        />
        <h2>{book.title}</h2>
        <h3> by {book.authors[0]}</h3>
        <div>
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
