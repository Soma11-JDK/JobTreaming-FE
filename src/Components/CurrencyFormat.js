import React from 'react';
import PropTypes from 'prop-types';

import Format from 'react-currency-format';

function CurrencyFormat({ price, salePercentage }) {
  return (
    <Format
      renderText={value => <div>{value}원</div>}
      decimalScale={2}
      value={(price * (100 - salePercentage)) / 100}
      displayType="text"
      thousandSeparator
    />
  );
}

CurrencyFormat.propTypes = {
  price: PropTypes.number.isRequired,
  salePercentage: PropTypes.number,
};

CurrencyFormat.defaultProps = {
  salePercentage: 0,
};

export default CurrencyFormat;
