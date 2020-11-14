/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import 'moment/locale/ko';
import styled from 'styled-components';

const Wrapper = styled.div`
  .DateRangePicker {
    border-radius: 66px;
    border: solid 1px #000000;
    padding: 10px 0px 10px 30px;
  }
  .DateRangePickerInput {
    border-radius: 66px;
  }
  .DateInput_input {
    border-radius: 66px;
    border: none;
  }
  .lecture_start_date {
  }
`;

export default class CustomDate extends Component {
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
      <Wrapper>
        <DateRangePicker
          withPortal
          displayFormat="yyyy.MM.DD"
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          startDateId="lecture_start_date" // PropTypes.string.isRequired,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          endDateId="lecture_end_date" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) =>
            this.setState({ startDate, endDate })
          } // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          showClearDates
          regular
          noBorder
        />
      </Wrapper>
    );
  }
}
