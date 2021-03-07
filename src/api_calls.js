import { filterResults, formatBook } from './util'
import { trackPromise} from 'react-promise-tracker';

const parseResponse = response => {
  if (response.ok) {
    return response.json()
  } else {
    throw response
  }
}

export const getValidBooks = query => {
  return trackPromise(fetch(`http://openlibrary.org/search.json?q=${query}`)
    .then(response => parseResponse(response))
    .then(results => filterResults(results))
    .then(results => results.map(bookData => formatBook(bookData))))
}
