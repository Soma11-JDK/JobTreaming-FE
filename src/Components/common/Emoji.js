import React from 'react';

import PropTypes from 'prop-types';

const Emoji = ({ label, symbol, size }) => (
  <span
    className="emoji"
    role="img"
    style={{ fontSize: size }}
    aria-label={label || ''}
    aria-hidden={label ? 'false' : 'true'}
  >
    {symbol}
  </span>
);

Emoji.propTypes = {
  label: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
export default Emoji;
