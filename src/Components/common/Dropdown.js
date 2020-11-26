import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Container = styled.ul`
  border-radius: 10px;
  box-shadow: 0 0 9px 0 rgba(232, 232, 232, 0.25);
  width: 140px;
  position: absolute;
  z-index: 3;
  list-style: none;
  text-align: start;
  background-color: #ffffff;
`;

const ListItem = styled.li``;

const SLink = styled(Link)`
  background-color: #ffffff;
  &:hover {
    background-color: #ccd9ff;
  }
  word-break: keep-all;
  display: block;
  height: 100%;
  width: 100%;
  color: #000000;
  text-align: end;
  padding: 12px;
  font-size: 18px;
  font-weight: 500;
`;

const Dropdown = ({ categoryItems, nowPage }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <Container
      onClick={handleClick}
      style={{ display: click ? 'none' : 'block' }}
    >
      {categoryItems &&
        categoryItems.map((category, idx) => {
          const { code, title } = category;
          const path = `/${nowPage}/${idx}`;
          // const path = '/category/1';
          return (
            <ListItem key={code} type="button">
              <SLink to={path} onClick={() => setClick(false)}>
                {title}
              </SLink>
            </ListItem>
          );
        })}
    </Container>
  );
};

Dropdown.propTypes = {
  categoryItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  nowPage: PropTypes.string.isRequired,
};
export default Dropdown;
