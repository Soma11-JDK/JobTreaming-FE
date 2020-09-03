/* eslint-disable global-require */
import React, { Component } from 'react';

import { categoryItems } from 'Components/Category';
import HomePresenter from './HomePresenter';

/* 추후 활용 가능성 존재
categoryItemList.forEach((item, idx) => {
  // eslint-disable-next-line no-param-reassign
  item.url = require(`assets/categories/before/cate_${idx + 1}_before.jpg`);
}); */

export default class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <HomePresenter categoryItems={categoryItems} />;
  }
}
