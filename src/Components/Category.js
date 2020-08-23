import React, { Component } from 'react';
import PropTypes, { string } from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  --bg-opacity: 0.7;
  background-color: rgba(238, 238, 238, var(--bg-opacity));
  width: 80%;
  margin-top: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(3, minmax(180px, 1fr));
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
`;

const CategoryContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border: 1px solid;
`;

const CategoryImage = styled.img`
  width: 140px;
  height: 140px;
  margin: 0 auto;
`;

const CategoryName = styled.span`
  font-size: 14px;
  text-align: center;
  margin-bottom: 8px;
`;

const Category = ({ categoryItems }) => (
  <Container>
    <Grid>
      {categoryItems.map(category => (
        <CategoryContainer key={category.id}>
          <CategoryImage src={category.url} alt="icon" />
          <CategoryName key={category.id}>{category.name}</CategoryName>
        </CategoryContainer>
      ))}
    </Grid>
  </Container>
);

Category.propTypes = {
  categoryItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      url: PropTypes.node,
    }),
  ).isRequired,
};
export default Category;
