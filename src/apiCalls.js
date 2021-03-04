

export const getEditionKeys = (query) => {
  return fetch(`http://openlibrary.org/search.json?q=${query}`)
    .then(response => console.log(response.json()))
}
