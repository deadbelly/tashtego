import React from 'react';
import propTypes from 'prop-types'

export const Error = ({ error }) => {
  return (
    <>
      <h1>{error.status}</h1>
      <h2>{error.statusText}</h2>
    </>
  )
}

Error.propTypes = {
  error: PropTypes.object
}
