import React from 'react';
import CategoryContext from 'Components/CategoryContext';
import { recommendApi } from 'api';
import Recommend from './RecommnedPresenter';

export default class RecommendContainer extends React.Component {
  constructor(props) {
    super();
    this.state = {
      searchTerm: '',
      error: null,
      loading: false,
      results: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm !== '') {
      this.searchByTerm();
    }
  };

  updateTerm = event => {
    const {
      target: { value },
    } = event;
    this.setState({
      searchTerm: value,
    });
  };

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    this.setState({ loading: true });

    try {
      const { data: results } = await recommendApi.recommend(searchTerm);
      this.setState({
        results,
      });
      console.log(`response: ${JSON.stringify(results)}`);
    } catch {
      this.setState({ error: "Can't find petition results." });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const categoryItems = this.context;
    const { results, searchTerm, error, loading } = this.state;
    return (
      <Recommend
        loading={loading}
        error={error}
        searchTerm={searchTerm}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
        results={results}
      />
    );
  }
}

RecommendContainer.contextType = CategoryContext;
