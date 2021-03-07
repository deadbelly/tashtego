import { filterResults, formatBook } from './util'

export const getValidBooks = query => {
  return fetch(`http://openlibrary.org/search.json?q=${query}`)
    .then(response => response.json())
    .then(results => filterResults(results))
    .then(results => results.map(bookData => formatBook(bookData)))
}
