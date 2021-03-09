import React, { useEffect } from 'react';
import moment from 'moment';
import './ActiveBook.css';
import { findRemainingDays, formatAuthors } from '../../util';
import PropTypes from 'prop-types';

export const ActiveBook = ({ book, changeActive, isDateLocked }) => {

  return (
    <div className='active-book'>
      { book.id ?
        <>
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
        <h2> by {formatAuthors(book.authors)}</h2>
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
        </> :
        <h1 className='landing-message'>
        It looks like there's nothing here! <br/>
        Trying searching for some books to add to your list!</h1>
      }
    </div>
  );
}

ActiveBook.propTypes = {
  book: PropTypes.object,
  changeActive: PropTypes.func,
  isDateLocked: PropTypes.bool
}
