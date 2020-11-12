/* eslint-disable global-require */
import React, { Component } from 'react';

import { categoryApi } from 'api';
import axios from 'axios';
import CategoryContext from 'Components/CategoryContext';
import HomePresenter from './HomePresenter';
/* 추후 활용 가능성 존재
categoryItemList.forEach((item, idx) => {
  // eslint-disable-next-line no-param-reassign
  item.url = require(`assets/categories/before/cate_${idx + 1}_before.jpg`);
}); */

export default class HomeContainer extends Component {
  constructor(props) {
    super();
    this.state = { url: '', result: null, error: null, loading: true };
  }

  async componentDidMount() {
    try {
      /* const { data } = await categoryApi.categoryImage('FOOD');
      const b64Data = btoa(
        new Uint8Array(data).reduce((dataArray, byte) => {
          return dataArray + String.fromCharCode(byte);
        }, ''),
      );
      this.setState({ url: data });
      console.log(`테스트: ${b64Data}`); */
    } catch {
      this.setState({ error: "Can't find category results." });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const categoryItems = this.context;
    const { result, error, loading, url } = this.state;
    return <HomePresenter categoryItems={categoryItems} url={url} />;
  }
}

HomeContainer.contextType = CategoryContext;
