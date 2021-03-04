

export const getEditionKeys = (query) => {
  console.log(`http://openlibrary.org/search.json?q=${query}`)
  return fetch(`http://openlibrary.org/search.json?q=${query}`)
    .then(response => console.log(response.json()))
}
