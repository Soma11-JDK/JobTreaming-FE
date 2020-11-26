import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { petitionApi } from 'api';
import CategoryContext from 'Components/CategoryContext';
import { useSelector } from 'react-redux';
import PetionPresenter from './PetitionPresenter';

export default class PetitionContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      pageNumber: 1,
      results: null,
      error: null,
      loading: true,
      title: '',
      contents: '',
    };
  }

  async componentDidMount() {
    const { pageNumber } = this.state;
    try {
      const { data: results } = await petitionApi.petitionList(pageNumber);
      this.setState({
        results,
      });
      console.log(`response: ${JSON.stringify(results)}`);
    } catch {
      this.setState({ error: "Can't find petition results." });
    } finally {
      this.setState({ loading: false });
    }
  }

  async componentDidUpdate(preProps) {
    const { pageNumber } = this.state;
    const { data: results } = await petitionApi.petitionList(pageNumber);

    /* if (preProps.results.length !== results.length) {
      this.changeResults(results);
    } */
  }

  changeResults = results => {
    this.setState({
      results,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, contents } = this.state;
    if (contents !== '') {
      this.addPetition();
      this.setState({
        contents: '',
      });
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
    const categoryItems = this.context;

    const {
      match: {
        params: { id },
      },
    } = this.props;
    const parsedId = parseInt(id, 10);
    const { pageNumber, results, error, loading, title, contents } = this.state;

    return (
      <PetionPresenter
        categoryIdx={parsedId}
        pageNumber={pageNumber}
        title={title}
        contents={contents}
        handleSubmit={this.handleSubmit}
        updateTitle={this.updateTitle}
        updateContents={this.updateContents}
        categoryItems={categoryItems}
        results={results}
      />
    );
  }
}

PetitionContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

PetitionContainer.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: '0',
    }),
  }),
};

PetitionContainer.contextType = CategoryContext;
