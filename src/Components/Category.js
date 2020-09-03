/* eslint-disable global-require */
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  --bg-opacity: 0.7;
  width: 80%;
  margin-top: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(auto, 1fr));
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  border-top: 1px solid black;
  border-left: 1px solid black;
`;

const CategoryImage = styled.img.attrs(props => ({
  src: props.url,
}))`
  width: 80px;
  height: 80px;
  margin: 5px auto;
`;

const CategoryContainer = styled.div`
  background-color: rgba(238, 238, 238, var(--bg-opacity));
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  &:hover {
    cursor: pointer;
  }
`;

const CategoryName = styled.span`
  font-size: 14px;
  height: 30px;
  text-align: center;
  word-break: keep-all;
`;

const categoryItems = [
  {
    id: 1,
    title: '01. 사업관리',
    url: require('assets/categories/before/cate_1_before.jpg'),
    hoverUrl: require('assets/categories/after/cate_1_after.jpg'),
    hover: false,
  },
  {
    id: 2,
    title: '02. 경영·회계·사무',
    url: require('assets/categories/before/cate_2_before.jpg'),
    hoverUrl: require('assets/categories/after/cate_1_after.jpg'),
    hover: false,
  },
  {
    id: 3,
    title: '03. 금융·보험',
    url: require('assets/categories/before/cate_3_before.jpg'),
    hoverUrl: require('assets/categories/after/cate_1_after.jpg'),
    hover: false,
  },
  {
    id: 4,
    title: '04. 교육·자연·사회과학',
    url: require('assets/categories/before/cate_4_before.jpg'),
    hoverUrl: require('assets/categories/after/cate_1_after.jpg'),
    hover: false,
  },
  {
    id: 5,
    title: '05. 법률·경찰·소방·교도·국방',
    url: require('assets/categories/before/cate_5_before.jpg'),
    hoverUrl: require('assets/categories/after/cate_1_after.jpg'),
    hover: false,
  },
  {
    id: 6,
    title: '06. 보건·의료',
    url: require('assets/categories/before/cate_6_before.jpg'),
    hoverUrl: require('assets/categories/after/cate_1_after.jpg'),
    hover: false,
  },
  {
    id: 7,
    title: '07. 사회복지·종교',
    url: require('assets/categories/before/cate_7_before.jpg'),
    hoverUrl: require('assets/categories/after/cate_1_after.jpg'),
    hover: false,
  },
  {
    id: 8,
    title: '08. 문화·예술·디자인·방송',
    url: require('assets/categories/before/cate_8_before.jpg'),
    hoverUrl: require('assets/categories/after/cate_1_after.jpg'),
    hover: false,
  },
  {
    id: 9,
    title: '09. 운전·운송',
    url: require('assets/categories/before/cate_9_before.jpg'),
    hoverUrl: require('assets/categories/after/cate_1_after.jpg'),
    hover: false,
  },
  {
    id: 10,
    title: '10. 영업판매',
    url: require('assets/categories/before/cate_10_before.jpg'),
    hoverUrl: require('assets/categories/after/cate_1_after.jpg'),
    hover: false,
  },
  {
    id: 11,
    title: '11. 경비·청소',
    url: require('assets/categories/before/cate_11_before.jpg'),
    hoverUrl: require('assets/categories/after/cate_1_after.jpg'),
    hover: false,
  },
  {
    id: 12,
    title: '12. 이용·숙박·여행·오락·스포츠',
    url: require('assets/categories/before/cate_12_before.jpg'),
    hoverUrl: require('assets/categories/after/cate_1_after.jpg'),
    hover: false,
  },
  {
    id: 13,
    title: '13. 음식서비스',
    url: require('assets/categories/before/cate_13_before.jpg'),
    hoverUrl: require('assets/categories/after/cate_1_after.jpg'),
    hover: false,
  },
  {
    id: 14,
    title: '14. 건설',
    url: require('assets/categories/before/cate_14_before.jpg'),
    hoverUrl: require('assets/categories/after/cate_1_after.jpg'),
    hover: false,
  },
  {
    id: 15,
    title: '15. 기계',
    url: require('assets/categories/before/cate_15_before.jpg'),
    hoverUrl: require('assets/categories/after/cate_1_after.jpg'),
    hover: false,
  },
  {
    id: 16,
    title: '16. 재료',
    url: require('assets/categories/before/cate_16_before.jpg'),
    hoverUrl: require('assets/categories/after/cate_1_after.jpg'),
    hover: false,
  },
  {
    id: 17,
    title: '17. 화학',
    url: require('assets/categories/before/cate_17_before.jpg'),
    hoverUrl: require('assets/categories/after/cate_1_after.jpg'),
    hover: false,
  },
  {
    id: 18,
    title: '18. 섬유·의복',
    url: require('assets/categories/before/cate_18_before.jpg'),
    hoverUrl: require('assets/categories/after/cate_1_after.jpg'),
    hover: false,
  },
  {
    id: 19,
    title: '19. 전기·전자',
    url: require('assets/categories/before/cate_19_before.jpg'),
    hoverUrl: require('assets/categories/after/cate_1_after.jpg'),
    hover: false,
  },
  {
    id: 20,
    title: '20. 정보통신',
    url: require('assets/categories/before/cate_20_before.jpg'),
    hoverUrl: require('assets/categories/after/cate_1_after.jpg'),
    hover: false,
  },
  {
    id: 21,
    title: '21. 식품가공',
    url: require('assets/categories/before/cate_21_before.jpg'),
    hoverUrl: require('assets/categories/after/cate_1_after.jpg'),
    hover: false,
  },
  {
    id: 22,
    title: '22. 인쇄·목재·가구·공예',
    url: require('assets/categories/before/cate_22_before.jpg'),
    hoverUrl: require('assets/categories/after/cate_1_after.jpg'),
    hover: false,
  },
  {
    id: 23,
    title: '23. 환경·에너지·안전',
    url: require('assets/categories/before/cate_23_before.jpg'),
    hoverUrl: require('assets/categories/after/cate_1_after.jpg'),
    hover: false,
  },
  {
    id: 24,
    title: '24. 농림어업',
    url: require('assets/categories/before/cate_24_before.jpg'),
    hoverUrl: require('assets/categories/after/cate_1_after.jpg'),
    hover: false,
  },
];
// const hoverId = ``;
// 이 방식으로 해결 불가능한지 궁금합니다!
/* const Category = ({ categoryItems }) => {
  function handleHover(category) {
    const {
      category: { id },
    } = category;
    console.log(id);
    hoverId = id;
  }
  function handleUnHover() {
    hoverId = '';
  }

  return (
    <Container>
      <Grid>
        {categoryItems.map(category => (
          <CategoryContainer
            key={category.id}
            onMouseEnter={() => handleHover({ category })}
            onMouseLeave={() => handleUnHover}
          >
            <CategoryImage
              url={hoverId === category.id ? category.hoverUrl : category.url}
              alt={category.name}
            />
            <CategoryName key={category.id}> {category.name} </CategoryName>
          </CategoryContainer>
        ))}
      </Grid>
    </Container>
  );
}; */

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
    };
  }

  handleHover(category) {
    const {
      category: { id },
    } = category;
    this.setState({ id });
  }

  handleUnHover() {
    this.setState({ id: '' });
  }

  render() {
    const { id } = this.state;
    return (
      <Container>
        <Grid>
          {categoryItems.map(category => (
            <Link key={category.id} to={`category/${category.id}`}>
              <CategoryContainer
                onMouseEnter={() => this.handleHover({ category })}
                onMouseLeave={() => this.handleUnHover()}
              >
                <CategoryImage
                  url={id === category.id ? category.hoverUrl : category.url}
                  alt={category.title}
                />
                <CategoryName key={category.id}>{category.title}</CategoryName>
              </CategoryContainer>
            </Link>
          ))}
        </Grid>
      </Container>
    );
  }
}

export default Category;
export { categoryItems };
