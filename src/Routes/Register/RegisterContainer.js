import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Register from './RegisterPresenter';

class RegisterContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <Register />;
  }
}

export default RegisterContainer;
