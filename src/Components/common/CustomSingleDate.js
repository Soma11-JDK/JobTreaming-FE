/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import 'moment/locale/ko';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  .SingleDatePicker {
    width: 100%;
    border-radius: 66px;
    border: solid 2px #000000;
    font-size: 20px;
    padding: 20px;
    height: 68px;
  }
  .SingleDatePickerInput {
    align-items: center;
    border-radius: 66px;
    border: none;
    height: 100%;
    width: 100%;
    display: flex;
    background-color: red;
  }
  .DateInput {
    width: 100%;
  }
  .DateInput_input {
    display: flex;
    flex: 1;
    border-radius: 66px;
    border: none;
  }
`;

export default class CustomSingleDate extends Component {
  constructor(props) {
    super(props);
    moment.locale('ko');

    this.state = {
      date: null,
      focused: props.autoFocus,
    };

    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDateChange(date) {
    this.setState({ date });
  }

  onFocusChange({ focused }) {
    this.setState({ focused });
  }

  alertPickedData = () => {
    const { date } = this.state;
    // eslint-disable-next-line no-alert
    alert(date);
  };

  render() {
    const { focused, date } = this.state;
    const { placeholder } = this.props;
    return (
      <Wrapper>
        <SingleDatePicker
          withPortal
          displayFormat="yyyy.MM.DD"
          date={date} // momentPropTypes.momentObj or null,
          id="inputPick" // PropTypes.string.isRequired,
          focused={focused}
          onDateChange={this.onDateChange} // PropTypes.func.isRequired,
          onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
          regular
          placeholder={placeholder}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </Wrapper>
    );
  }
}

CustomSingleDate.propTypes = {
  autoFocus: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
};

CustomSingleDate.defaultProps = {
  autoFocus: false,
};
