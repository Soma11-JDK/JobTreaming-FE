import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { categoryItems } from 'Components/Category';
import LecturePresenter from './LecturePresenter';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  font-size: 100px;
`;

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
    window.scrollTo(0, 0);
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
    const { result, error, loading, categoryId } = this.state;
    return (
      <LecturePresenter
        categoryId={categoryId}
        categoryTitle={categoryItems[categoryId - 1].title}
      />
    );
  }
}

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
