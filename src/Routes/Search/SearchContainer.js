import React from 'react';
import CategoryContext from 'Components/CategoryContext';
import { lectureApi } from 'api';
import { connect, useSelector } from 'react-redux';
import * as searchActions from 'redux/modules/search';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Search from './SearchPresenter';

class SearchContainer extends React.Component {
  constructor(props) {
    super();
    this.state = {
      results: null,
      searchTerm: '',
      error: null,
      loading: false,
    };
  }

  async componentDidMount() {
    const { search } = this.props;
    const searchTerm = search.get('searchTerm');
    try {
      console.log(`searchTerm: ${JSON.stringify(this.props)}`);
      console.log(`searchTerm2 ${search.get('searchTerm')}`);
      const { data: results } = await lectureApi.searchLecture('', searchTerm);

      this.setState({
        results,
        searchTerm,
      });
      // history.push('/search');
    } catch {
      this.setState({ error: "Can't find results." });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const categoryItems = this.context;
    const { results, searchTerm, error, loading } = this.state;

    return (
      <Search
        searchResults={results}
        loading={loading}
        error={error}
        searchTerm={searchTerm}
        categoryItems={categoryItems}
      />
    );
  }
}

SearchContainer.contextType = CategoryContext;

SearchContainer.propTypes = {
  search: ImmutablePropTypes.mapContains({
    searchTerm: PropTypes.string,
  }),
};

SearchContainer.defaultProps = {
  search: ImmutablePropTypes.mapContains({
    searchTerm: '',
  }),
};

const mapStateToProps = state => ({
  search: state.search,
});

const mapDispatchToProps = dispatch =>
  // bindActionCreators 를 사용하면, 자동으로 액션 생성 함수에 dispatch 가 감싸진 상태로 호출 할 수 있습니다.
  bindActionCreators(
    {
      searchActions,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
