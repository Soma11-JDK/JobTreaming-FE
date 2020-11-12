import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
      result: null,
      error: null,
      loading: true,
      categoryId: parseInt(id, 10),
    };
  }

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const parsedId = parseInt(id, 10);
    this.setState({
      categoryId: parsedId,
    });
    if (Number.isNaN(parsedId)) {
      return push('/');
    }
    return true;
  }

  componentDidUpdate(preProps) {
    window.scrollTo(0, 0);
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const parsedId = parseInt(id, 10);
    if (preProps.match.params.id !== id) {
      this.changeId(parsedId);
    }
    if (Number.isNaN(parsedId)) {
      return push('/');
    }
    return true;
  }

  changeId(id) {
    this.setState({
      categoryId: id,
    });
  }

  render() {
    const categoryItems = this.context;
    const { result, error, loading, categoryId } = this.state;
    return (
      <LecturePresenter
        categoryId={categoryId}
        categoryTitle={categoryItems[categoryId].title}
        categoryItems={categoryItems}
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
