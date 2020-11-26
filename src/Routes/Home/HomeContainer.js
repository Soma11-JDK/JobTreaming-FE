/* eslint-disable global-require */
import React, { Component } from 'react';

import CategoryContext from 'Components/CategoryContext';
import { lectureApi } from 'api';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchActions from 'redux/modules/search';
import PropTypes, { objectOf } from 'prop-types';
import SearchPresenter from '../Search/SearchPresenter';
import HomePresenter from './HomePresenter';
/* 추후 활용 가능성 존재
categoryItemList.forEach((item, idx) => {
  // eslint-disable-next-line no-param-reassign
  item.url = require(`assets/categories/before/cate_${idx + 1}_before.jpg`);
}); */

class HomeContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      url: '',
      error: null,
      searchTerm: '',
      loading: true,
      hotResults: '',
    };
  }

  async componentDidMount() {
    try {
      const { data: results } = await lectureApi.hotLecture();
      this.setState({
        hotResults: results,
      });
      console.log(`hotResults: ${results}`);
    } catch {
      console.log('error!!!!!!!!!!!!!!');
      this.setState({ error: "Can't find hot lecture results." });
    } finally {
      this.setState({ loading: false });
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const { searchTerm } = this.state;

    this.searchByTerm();
  };

  updateTerm = event => {
    const {
      target: { value },
    } = event;
    this.setState({
      searchTerm: value,
    });
  };

  searchByTerm = () => {
    const { searchTerm } = this.state;

    const { history, SearchActions } = this.props;
    this.setState({ loading: true });

    // searchTerm = { searchTerm };
    SearchActions.setSearchInfo(searchTerm);
    history.push('/search');
  };

  render() {
    const categoryItems = this.context;
    const { error, loading, searchTerm, url, hotResults } = this.state;

    console.log(`hotResults: ${hotResults}`);

    return (
      <HomePresenter
        categoryItems={categoryItems}
        url={url}
        searchTerm={searchTerm}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
        hotResults={hotResults}
      />
    );
  }
}

HomeContainer.contextType = CategoryContext;

HomeContainer.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  SearchActions: PropTypes.shape().isRequired,
};

export default connect(null, dispatch => ({
  SearchActions: bindActionCreators(searchActions, dispatch),
}))(HomeContainer);
