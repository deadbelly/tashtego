export const formatSearch = (query) => {
  if (query.includes(' ')) {
    return query.split(' ').join('+')
  }
  return query
}

export const filterResults = (searchResults) => {
  console.log(searchResults.docs)
  return searchResults.docs.filter(result => result.cover_i > 0)
}
