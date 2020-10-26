import React from 'react';
import SearchPresenter from './SearchPresenter';

export default class extends React.Component {
  constructor(props) {
    super();
    this.state = {
      searchResults: null,
      searchTerm: '',
      error: null,
      loading: false,
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

    /* try {
      const {
        data: { results: movieResults },
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: tvResults },
      } = await tvApi.search(searchTerm);
      this.setState({
        movieResults,
        tvResults,
      });
    } catch {
      this.setState({ error: "Can't find results." });
    } finally {
      this.setState({ loading: false });
    } */
  };

  render() {
    const { searchResults, searchTerm, error, loading } = this.state;
    return (
      <SearchPresenter
        searchResults={searchResults}
        loading={loading}
        error={error}
        searchTerm={searchTerm}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}
