import React from 'react';

// eslint-disable-next-line react/prop-types
const ItemButton = ({ children }) => (
  <button type="submit" variant="warning" size="sm" className="btn btn-block btn-warning mt-3">
    {children}
  </button>
);

export default ItemButton;
