/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import 'moment/locale/ko';
import styled from 'styled-components';

const CustomDateRangePicker = styled(DateRangePicker)`
  background-color: red;
  .DateInput_input {
    background-color: red;
  }
`;

export default class Testairbnb extends Component {
  constructor(props) {
    super(props);
    moment.locale('ko');

    this.state = {
      startDate: null,
      endDate: null,
      focused: true,
    };

    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDateChange(date) {
    this.setState({ date });
  }

  onFocusChange() {
    this.setState({ focused: true });
  }

  alertPickedData = () => {
    const { date } = this.state;
    // eslint-disable-next-line no-alert
    alert(date);
  };

  render() {
    const { focused, date } = this.state;

    return (
      <DateRangePicker
        withPortal
        displayFormat="yyyy.MM.DD"
        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
        onDatesChange={({ startDate, endDate }) =>
          this.setState({ startDate, endDate })
        } // PropTypes.func.isRequired,
        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
        customArrowIcon="-"
        showClearDates
        regular
      />
    );
  }
}
