import moment from 'moment';
import { useState } from 'react';

export const formatSearch = query => {
  if (query.includes(' ')) {
    return query.split(' ').join('+')
  }
  return query
}

export const filterResults = searchResults => {
  return searchResults.docs.filter(result => (
    result.cover_i > 0 &&
    result.cover_edition_key &&
    result.author_name
  ))
}

export const formatBook = bookData => {
  return {
    id: bookData.cover_edition_key,
    title: bookData.title,
    authors: bookData.author_name,
    pubYear: bookData.first_publish_year,
    editions: bookData.edition_count,
    cover: `https://covers.openlibrary.org/b/id/${bookData.cover_i}-L.jpg`,
    alt: `${bookData.title} cover`
  }
}

export const formatAuthors = authors => {
  if (authors.length > 1) {
    return authors.join(', ')
  }
  return authors[0]
}

export const findRemainingDays = date => {
  return moment(date, 'YYYY-MM-DD').fromNow()
}

export const useLocalStorage = (storageKey, defaultState) => {
  const [storedState, setStoredState] = useState(() => {
    try {
      const savedState = window.localStorage.getItem(storageKey);
      return savedState ? JSON.parse(savedState) : defaultState;
    } catch (error) {
      console.log(error);
      return defaultState;
    }
  });

  const setterFunction = state => {
    try {
      const stateToStore =
        state instanceof Function ? state(storedState) : state;
      setStoredState(stateToStore);
      window.localStorage.setItem(storageKey, JSON.stringify(stateToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedState, setterFunction];
}
