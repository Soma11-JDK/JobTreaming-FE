import React, { useState, useRef } from 'react';

import { DateRange } from 'react-date-range';
import * as locales from 'react-date-range/dist/locale';
import styled from 'styled-components';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Span = styled.span`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  margin-bottom: ${props => props.marginBottom};
`;

const CustomDateRange = () => {
  const [locale] = useState('ko');
  const [click, setClick] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    },
  ]);
  const handleClick = () => setState({ autoFocus: true });

  return (
    <DateRange
      onClick={() => handleClick}
      editableDateInputs
      locale={locales[locale]}
      onChange={item => setState([item.selection])}
      dateDisplayFormat="yyyy.MM.dd(eee)"
      moveRangeOnFirstSelection={false}
      ranges={state}
      showSelectionPreview={false}
    />
  );
};
export default CustomDateRange;
