import React from 'react';
import PropTypes from 'prop-types'
import './Error.css'

export const Error = ({ error }) => {
  return (
    <div className='error'>
      <h1>{error.status}</h1>
      <h2>{error.statusText}</h2>
    </div>
  );
}

Error.propTypes = {
  error: PropTypes.object
}
