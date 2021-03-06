import React, { useEffect } from 'react';
import moment from 'moment';
import './ActiveBook.css';

export const ActiveBook = ({ book, changeActive }) => {
  useEffect(() => {
    if (book.date <= moment().format('YYYY-MM-DD')) {
      changeActive(null, null, false)
    }
  }, [book, changeActive])

  return (
    <div className='active-book'>
      <img
        className='active-cover'
        src={book.cover}
        alt={book.alt}
      />
      <h1>{book.title}</h1>
      <h2> by {book.authors[0]}</h2>
      <h3> Completion Date
        <input
          type='date'
          min={moment().format('YYYY-MM-DD')}
          value={book.date}
          onChange={event => changeActive('date', event.target.value, false)}
        />
      </h3>
      <div className='controls'>
        <button
          className='return-btn'
          onClick={() => changeActive(null, null, true)}
        >Return to List</button>
        <button
          className='finished-btn'
          onClick={() => changeActive(null, null, false)}
        >Finished</button>
      </div>
    </div>
  );
}
