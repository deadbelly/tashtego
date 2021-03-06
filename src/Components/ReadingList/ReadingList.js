import React from 'react';
import './ReadingList.css';

export const ReadingList = ({ readingList }) => {
  const books = readingList.map(book => {
    return (
      <div className='list-item' key={book.id}>
        <h2>{book.title}</h2>
        <h3> by {book.authors[0]}</h3>
      </div>
    )
  })

  return (
    <>
      {books}
    </>
  )
}
