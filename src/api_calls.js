import { filterResults } from './util'

export const getValidBooks = (query) => {
  return fetch(`http://openlibrary.org/search.json?q=${query}`)
    .then(response => response.json())
    .then(results => console.log(filterResults(results)))
}
