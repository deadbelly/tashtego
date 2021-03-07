import React, { useState, useEffect } from 'react';
import './App.css';
import { Search } from '../Search/Search';
import { NavBar } from '../NavBar/NavBar';
import { ReadingList } from '../ReadingList/ReadingList';
import { ActiveBook } from '../ActiveBook/ActiveBook';
import { Settings } from '../Settings/Settings';
import { Error } from '../Error/Error';
import { Route } from 'react-router-dom';
import moment from 'moment';
import { useLocalStorage } from '../../util';

export const App = () => {
  const [readingList, setReadingList] = useLocalStorage('readingList', []);
  const [activeBook, setActiveBook] = useLocalStorage('activeBook', {id: null});
  const [settings, setSettings] = useLocalStorage('settings',
    {
    lockList: false,
    lockDate: false,
    defaultDays: 15
    }
  );
  const [error, setError] = useState(null);

  useEffect(() => {
    if (readingList.length && !activeBook.id) {
      setActiveBook({
        ...readingList[0],
        date: moment().add(settings.defaultDays + 1, 'days').format('YYYY-MM-DD')
      })
      setReadingList(readingList.splice(1))
    }
  }, [readingList, setReadingList,
    activeBook, setActiveBook,
    settings.defaultDays])

  const addBook = newBook => {
    if (!readingList.filter(book => book.id === newBook.id).length
      && activeBook.id !== newBook.id
      && !settings.lockList) {
      setReadingList([ ...readingList, newBook])
    }
  }

  const changeActive = (modKey, modValue, returnBook) => {
    if (returnBook) {
      setReadingList([ ...readingList, activeBook]);
    }

    if (modKey && modValue) {
      setActiveBook({
        ...activeBook,
        [modKey]: modValue
      })
    } else {
      setActiveBook({id: null});
    }
  }

  const checkIfListed = id => {
    if (readingList.filter(book => book.id === id).length ||
      activeBook.id === id) {
      return 'on-list'
    }
    return ''
  }

  return (
    <div className="App">
      <Route exact path='/' render={() =>
        (activeBook.id &&
          <ActiveBook
            book={activeBook}
            changeActive={changeActive}
            isDateLocked={settings.lockDate}
          />)
      }/>
      <Route exact path='/search' render={() =>
        <Search
          addBook={addBook}
          checkIfListed={checkIfListed}
          setError={setError}
        />
      }/>
      <Route exact path='/list' render={() =>
        <ReadingList
          readingList={readingList}
          setReadingList={setReadingList}
          isListLocked={settings.lockList}
        />
      }/>
      <Route exact path='/settings' render={() =>
        <Settings
          settings={settings}
          setSettings={setSettings}
        />
      }/>
      {error && <Error error={error} />}
      <Route path='/' component={NavBar} />
    </div>
  );
}
