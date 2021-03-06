import React, { useState, useEffect } from 'react';
import './App.css';
import { Search } from '../Search/Search';
import { NavBar } from '../NavBar/NavBar';
import { ReadingList } from '../ReadingList/ReadingList';
import { Route } from 'react-router-dom';

export const App = () => {
  const [readingList, setReadingList] = useState([]);
  const [activeBook, setActiveBook] = useState(null);

  useEffect(() => {
    if (readingList.length && !activeBook.id) {
      setActiveBook({
        ...readingList[0],
        time: Date.now()
      })
      setReadingList(readingList.splice(1))
    }
  }, [readingList, activeBook])

  const addBook = newBook => {
    if (!readingList.filter(book => book.id === newBook.id).length) {
      setReadingList([ ...readingList, newBook])
    }
  };

  return (
    <div className="App">
      <Route exact path='/search' render={ () =>
        <Search addBook={addBook} />
      }/>
      <Route exact path='/list' render={ () =>
        <ReadingList
          readingList={readingList}
          setReadingList={setReadingList}
        />
      }/>
      <NavBar />
    </div>
  );
}
