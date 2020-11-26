/* eslint-disable global-require */
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { baseURL } from 'api';

const Container = styled.div`
  width: 50%;
  height: 100%;
  margin-top: 74px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(auto, 1fr));
  grid-template-columns: repeat(auto-fill, minmax(174px, 1fr));
  grid-gap: 30px;
  justify-content: center;
`;

const CategoryImage = styled.img.attrs(props => ({
  src: props.url,
}))`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

const CategoryContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 30px;
  width: 100%;
  height: 174px;
  box-shadow: 0 0 9px 0 rgba(164, 164, 164, 0.3);
  &:hover {
    cursor: pointer;
    background-color: #dcecff;
  }
`;

const CategoryName = styled.span`
  height: 25px;
  text-align: center;
  word-break: keep-all;
  font-weight: 500;
  font-size: 21px;
`;

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
    super();
    const { categoryItems } = props;
    this.state = {
      id: '',
      categoryItems,
    };
  }

  handleHover(id) {
    this.setState({ id });
  }

  handleUnHover() {
    this.setState({ id: '' });
  }

  render() {
    const { categoryItems, id } = this.state;

    return (
      <Container>
        <Grid>
          {categoryItems &&
            categoryItems.map((category, idx) => (
              <Link key={category.id} to={`category/${idx}`}>
                <CategoryContainer
                  key={category.id}
                  onMouseEnter={() => this.handleHover(category.id)}
                  onMouseLeave={() => this.handleUnHover()}
                >
                  <CategoryImage
                    key={category.id}
                    url={`${baseURL}/images/category/${category.code}.png`}
                    alt={category.title}
                  />
                  <CategoryName key={category.id}>
                    {category.title}
                  </CategoryName>
                </CategoryContainer>
              </Link>
            ))}
        </Grid>
      </Container>
    );
  }
}

Category.propTypes = {
  categoryItems: PropTypes.arrayOf(PropTypes.array),
};

Category.defaultProps = {
  categoryItems: '',
};
export default Category;
