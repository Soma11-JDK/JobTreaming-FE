import React from 'react';
import styled from 'styled-components';

import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

const CustomDateRange = styled(DateRangePicker)`
  border: 0;
`;

const styles = { border: '1px solid black' };
function TestDateRange() {
  return <CustomDateRange style={styles} showOneCalendar />;
}

export default TestDateRange;
