/* eslint-disable global-require */
import React, { Component } from 'react';

import { categoryItems } from 'Components/Category';
import { categoryApi } from 'api';
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
      const { body } = await categoryApi.categoryList();
      this.setState({
        result: body,
      });
      console.log(body);
    } catch {
      this.setState({ error: "Can't find petition results." });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <HomePresenter categoryItems={categoryItems} />;
  }
}
