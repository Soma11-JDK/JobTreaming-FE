import React, { Component } from 'react';
import styled from 'styled-components';

import { petitionApi } from 'api';
import PetionPresenter from './PetitionPresenter';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 1,
      result: null,
      error: null,
      loading: true,
    };
  }

  async componentDidMount() {
    const { pageNumber } = this.state;
    try {
      const { body } = await petitionApi.petitionList(pageNumber);
      this.setState({
        result: body,
      });
    } catch {
      this.setState({ error: "Can't find petition results." });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { pageNumber, result, error, loading } = this.state;
    console.log(result);
    return <PetionPresenter />;
  }
}
