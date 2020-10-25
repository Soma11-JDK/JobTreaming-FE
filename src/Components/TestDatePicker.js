import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
import getYear from 'date-fns/getYear';
import getMonth from 'date-fns/getMonth';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const TestDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <DatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      withPortal
      shouldCloseOnSelect={false}
    />
  );
};
export default TestDatePicker;
