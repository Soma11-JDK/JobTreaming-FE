import React, { Component } from 'react';
import styled from 'styled-components';

import { petitionApi } from 'api';
import PetionPresenter from './PetitionPresenter';

export default class extends Component {
  constructor(props) {
    super();
    this.state = {
      pageNumber: 1,
      result: null,
      error: null,
      loading: true,
      title: '',
      contents: '',
    };
  }

  async componentDidMount() {
    const { pageNumber } = this.state;
    try {
      const { data: body } = await petitionApi.petitionList(pageNumber);
      this.setState({
        result: JSON.stringify(body),
      });
      console.table(`respone: ${JSON.stringify(body)}`);
    } catch {
      this.setState({ error: "Can't find petition results." });
    } finally {
      this.setState({ loading: false });
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const { title, contents } = this.state;
    if (title !== '' && contents !== '') {
      this.addPetition();
    }
  };

  updateTitle = event => {
    const {
      target: { value },
    } = event;
    this.setState({
      title: value,
    });
  };

  updateContents = event => {
    const {
      target: { value },
    } = event;
    this.setState({
      contents: value,
    });
  };

  addPetition = () => {
    const { title, contents } = this.state;
    try {
      console.log('test : ', title, ' ', 'contents: ', contents);
      petitionApi.petitionAdd(title, contents);
    } catch {
      this.setState({ error: "Can't find results." });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { pageNumber, result, error, loading, title, contents } = this.state;
    console.log(`결과: ${{ result }}`);
    return (
      <PetionPresenter
        pageNumber={pageNumber}
        title={title}
        contents={contents}
        handleSubmit={this.handleSubmit}
        updateTitle={this.updateTitle}
        updateContents={this.updateContents}
      />
    );
  }
}
