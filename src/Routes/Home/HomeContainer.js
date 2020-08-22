import React, { Component } from 'react';
import HomePresenter from './HomePresenter';

export default class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <HomePresenter />;
  }
}
