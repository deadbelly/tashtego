import React from 'react';
import moment from 'moment';
import './ActiveBook.css';

export const ActiveBook = ({ book, setActiveBook }) => {
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
          onChange={event => setActiveBook({
            ...book,
            date: event.target.value
          })}
        />
      </h3>
    </div>
  );
}
