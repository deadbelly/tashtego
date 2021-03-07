import { filterResults, formatBook } from './util'

const parseResponse = response => {
  if (response.ok) {
    return response.json()
  } else {
    throw response
  }
}

export const getValidBooks = query => {
  return fetch(`http://openlibrary.org/search.json?q=${query}`)
    .then(response => parseResponse(response))
    .then(results => filterResults(results))
    .then(results => results.map(bookData => formatBook(bookData)))
}
