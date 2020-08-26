import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
    super(props);
    const { categoryItems } = props;
    this.state = {
      categoryItems,
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
    const { categoryItems, id } = this.state;
    return (
      <Container>
        <Grid>
          {categoryItems.map(category => (
            <CategoryContainer
              key={category.id}
              onMouseEnter={() => this.handleHover({ category })}
              onMouseLeave={() => this.handleUnHover()}
            >
              <CategoryImage
                url={id === category.id ? category.hoverUrl : category.url}
                alt={category.name}
              />
              <CategoryName key={category.id}> {category.name} </CategoryName>
            </CategoryContainer>
          ))}
        </Grid>
      </Container>
    );
  }
}

Category.propTypes = {
  categoryItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      url: PropTypes.node,
      hoverUrl: PropTypes.node,
      hover: PropTypes.bool,
    }),
  ).isRequired,
};
export default Category;
