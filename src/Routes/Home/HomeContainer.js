/* eslint-disable global-require */
import React, { Component } from 'react';

import { categoryItems } from 'Components/main/Category';
import { categoryApi } from 'api';
import axios from 'axios';
import HomePresenter from './HomePresenter';
/* 추후 활용 가능성 존재
categoryItemList.forEach((item, idx) => {
  // eslint-disable-next-line no-param-reassign
  item.url = require(`assets/categories/before/cate_${idx + 1}_before.jpg`);
}); */

export default class HomeContainer extends Component {
  constructor(props) {
    super();
    this.state = { result: null, error: null, loading: true };
  }

  async componentDidMount() {
    try {
      const { data: result } = await categoryApi.categoryList();
      this.setState({
        result: JSON.stringify({ result }),
      });
      console.log(`테스트: ${JSON.stringify({ result })}`);
    } catch {
      this.setState({ error: "Can't find category results." });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <HomePresenter categoryItems={categoryItems} />;
  }
}
