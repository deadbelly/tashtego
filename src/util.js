export const formatSearch = (query) => {
  if (query.includes(' ')) {
    return query.split(' ').join('+')
  }
  return query
}
