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

export const formatBook = (bookData) => {
  return {
    id: bookData.cover_edition_key,
    title: bookData.title,
    authors: bookData.author_name,
    pubYear: bookData.first_publish_year,
    editions: bookData.edition_count,
    cover: `https://covers.openlibrary.org/b/${bookData.cover_i}/1-S.jpg`
  }
}
