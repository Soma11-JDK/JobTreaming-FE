import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

const Container = styled.div`
  width: 400px;
  height: 90%;
  background-color: light-gray;
  border: 1px solid black;
  padding: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const Grid = styled.div`
  display: grid;
  justify-content: left;
  grid-template-rows: repeat(auto-fill, 1fr);
  row-gap: 15px;
`;

const Title = styled.div`
  :hover {
    color: ${props => props.hoverColor};
  }
  width: 100%;
  font-size: 16px;
  word-break: keep-all;
  color: black;
  opacity: ${props => props.textOpacity};
  border-bottom: 3px solid
    ${props => (props.currentFlag ? '#646EFF' : 'transparent')};
`;

const SideBar = ({ current, itemList }) => {
  return (
    <Container>
      <Grid>
        {itemList.map(item => (
          <Link key={item.id} to={`/category/${item.id}`}>
            <Title
              currentFlag={current === item.id}
              key={item.id}
              textOpacity={current === item.id ? 1 : 0.5}
              hoverColor={current === item.id ? 'black' : 'red'}
            >
              {item.title}
            </Title>
          </Link>
        ))}
      </Grid>
    </Container>
  );
};

SideBar.propTypes = {
  current: PropTypes.number,
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    }),
  ).isRequired,
};

SideBar.defaultProps = {
  current: 1,
};

export default withRouter(SideBar);
