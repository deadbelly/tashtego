import React, { useEffect } from 'react';
import moment from 'moment';
import './ActiveBook.css';
import { findRemainingDays } from '../../util';
import PropTypes from 'prop-types';

export const ActiveBook = ({ book, changeActive, isDateLocked }) => {
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
      <div className='controls'>
        <button
          className='controlbtn'
          onClick={() => changeActive(null, null, true)}
        >Return to List</button>
        <button
          className='controlbtn'
          onClick={() => changeActive(null, null, false)}
        >Finished</button>
      </div>
      <h1>{book.title}</h1>
      <h2> by {book.authors[0]}</h2>
        <h3>
          You expect to finish {findRemainingDays(book.date)}
          <input
            className='datectrl'
            type='date'
            min={moment().format('YYYY-MM-DD')}
            value={book.date}
            disabled={isDateLocked}
            onChange={event => changeActive('date', event.target.value, false)}
          />
        </h3>
    </div>
  );
}
