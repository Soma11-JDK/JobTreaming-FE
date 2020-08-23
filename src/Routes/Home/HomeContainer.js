/* eslint-disable global-require */
import React, { Component } from 'react';
import styled from 'styled-components';

import Category from 'Components/Category';
import HomePresenter from './HomePresenter';

const categoryItemList = [
  {
    id: 1,
    name: '01. 사업관리',
    url: require('assets/categories/before/cate_1_before.jpg'),
  },
  {
    id: 2,
    name: '02. 경영·회계·사무',
    url: require('assets/categories/before/cate_2_before.jpg'),
  },
  {
    id: 3,
    name: '03. 금융·보험',
    url: require('assets/categories/before/cate_3_before.jpg'),
  },
  {
    id: 4,
    name: '04. 교육·자연·사회과학',
    url: require('assets/categories/before/cate_4_before.jpg'),
  },
  {
    id: 5,
    name: '05. 법률·경찰·소방·교도·국방',
    url: require('assets/categories/before/cate_5_before.jpg'),
  },
  {
    id: 6,
    name: '06. 보건·의료',
    url: require('assets/categories/before/cate_6_before.jpg'),
  },
  {
    id: 7,
    name: '07. 사회복지·종교',
    url: require('assets/categories/before/cate_7_before.jpg'),
  },
  {
    id: 8,
    name: '08. 문화·예술·디자인·방송',
    url: require('assets/categories/before/cate_8_before.jpg'),
  },
  {
    id: 9,
    name: '09. 운전·운송',
    url: require('assets/categories/before/cate_9_before.jpg'),
  },
  {
    id: 10,
    name: '10. 영업판매',
    url: require('assets/categories/before/cate_10_before.jpg'),
  },
  {
    id: 11,
    name: '11. 경비·청소',
    url: require('assets/categories/before/cate_11_before.jpg'),
  },
  {
    id: 12,
    name: '12. 이용·숙박·여행·오락·스포츠',
    url: require('assets/categories/before/cate_12_before.jpg'),
  },
  {
    id: 13,
    name: '13. 음식서비스',
    url: require('assets/categories/before/cate_13_before.jpg'),
  },
  {
    id: 14,
    name: '14. 건설',
    url: require('assets/categories/before/cate_14_before.jpg'),
  },
  {
    id: 15,
    name: '15. 기계',
    url: require('assets/categories/before/cate_15_before.jpg'),
  },
  {
    id: 16,
    name: '16. 재료',
    url: require('assets/categories/before/cate_16_before.jpg'),
  },
  {
    id: 17,
    name: '17. 화학',
    url: require('assets/categories/before/cate_17_before.jpg'),
  },
  {
    id: 18,
    name: '18. 섬유·의복',
    url: require('assets/categories/before/cate_18_before.jpg'),
  },
  {
    id: 19,
    name: '19. 전기·전자',
    url: require('assets/categories/before/cate_19_before.jpg'),
  },
  {
    id: 20,
    name: '20. 정보통신',
    url: require('assets/categories/before/cate_20_before.jpg'),
  },
  {
    id: 21,
    name: '21. 식품가공',
    url: require('assets/categories/before/cate_21_before.jpg'),
  },
  {
    id: 22,
    name: '22. 인쇄·목재·가구·공예',
    url: require('assets/categories/before/cate_22_before.jpg'),
  },
  {
    id: 23,
    name: '23. 환경·에너지·안전',
    url: require('assets/categories/before/cate_23_before.jpg'),
  },
  {
    id: 24,
    name: '24. 농림어업',
    url: require('assets/categories/before/cate_24_before.jpg'),
  },
];

/* 추후 활용 가능성 존재
categoryItemList.forEach((item, idx) => {
  // eslint-disable-next-line no-param-reassign
  item.url = require(`assets/categories/before/cate_${idx + 1}_before.jpg`);
});
*/

export default class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryItems: categoryItemList,
    };
  }

  render() {
    const { categoryItems } = this.state;

    return <HomePresenter categoryItems={categoryItems} />;
  }
}
