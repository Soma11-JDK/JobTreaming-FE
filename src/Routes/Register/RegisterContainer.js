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
    const { history } = this.props;
    return <Register history={history} />;
  }
}

RegisterContainer.propTypes = {
  history: PropTypes.shape({}).isRequired,
};
export default RegisterContainer;
