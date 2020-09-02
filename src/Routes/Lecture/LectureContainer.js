import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  font-size: 100px;
`;

export default class LectureContainer extends Component {
  constructor(props) {
    super(props);
    const {
      match: {
        params: { id },
      },
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      categoryId: id,
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
    if (Number.isNaN(parsedId)) {
      return push('/');
    }
    return true;
  }

  render() {
    const { result, error, loading, categoryId } = this.state;
    console.log(categoryId);
    return <Container>{categoryId}</Container>;
  }
}

LectureContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
