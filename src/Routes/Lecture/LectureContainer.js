import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { lectureApi } from 'api';
import CategoryContext from 'Components/CategoryContext';
import LecturePresenter from './LecturePresenter';

export default class LectureContainer extends Component {
  constructor(props) {
    super();
    const {
      match: {
        params: { id },
      },
    } = props;
    this.state = {
      results: null,
      error: null,
      loading: true,
      categoryId: parseInt(id, 10),
    };
  }

  async componentDidMount() {
    const categoryItems = this.context;

    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const parsedId = parseInt(id, 10);
    const { data: results } = await lectureApi.hotLecture(
      categoryItems[parsedId].code,
    );

    this.setState({
      categoryId: parsedId,
      results,
    });
    if (Number.isNaN(parsedId)) {
      return push('/');
    }
    return true;
  }

  async componentDidUpdate(preProps) {
    window.scrollTo(0, 0);
    const categoryItems = this.context;
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const parsedId = parseInt(id, 10);
    if (preProps.match.params.id !== id) {
      const { data: results } = await lectureApi.hotLecture(
        categoryItems[parsedId].code,
      );
      this.changeResults(parsedId, results);
    }
    if (Number.isNaN(parsedId)) {
      return push('/');
    }

    return true;
  }

  changeResults(id, results) {
    this.setState({
      categoryId: id,
      results,
    });
  }

  render() {
    const categoryItems = this.context;
    const { results, error, loading, categoryId } = this.state;
    return (
      <LecturePresenter
        categoryId={categoryId}
        categoryTitle={categoryItems[categoryId].title}
        categoryItems={categoryItems}
        results={results}
      />
    );
  }
}

LectureContainer.contextType = CategoryContext;

LectureContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
    url: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
