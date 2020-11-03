/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TabContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  width: 80%;
  display: flex;
`;

const Item = styled.li`
  width: 200px;
  height: 50px;
  text-align: center;
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid ${props => (props.current ? '#3918ff' : '#000000')};
  opacity: ${props => (props.current ? '1' : '0.4')};
`;

const Span = styled.span`
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${props => (props.current ? '#3918ff' : '#000000')};
  opacity: ${props => (props.current ? '1' : '0.5')};
  word-break: keep-all;
`;

const Tab = ({ tabInfo, nowTab, nowPage }) => {
  const [tabTitle, setTabTitle] = useState(nowTab);

  const history = useHistory();

  const handleClick = state => {
    history.push({
      state,
    });

    return setTabTitle(state);
  };

  return (
    <TabContainer>
      <List>
        {tabInfo.map((info, idx) => {
          const { title, state } = info;

          return (
            <Item key={idx} onClick={() => handleClick(state)}>
              <SLink
                current={tabTitle === state ? 1 : 0}
                to={
                  nowPage === 'myLecture'
                    ? `/mylectureroom/${state}`
                    : `/tutor/${state}`
                }
              >
                <Span current={tabTitle === state ? 1 : 0}>{title}</Span>
              </SLink>
            </Item>
          );
        })}
      </List>
    </TabContainer>
  );
};

Tab.propTypes = {
  tabInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
  nowTab: PropTypes.string.isRequired,
  nowPage: PropTypes.string.isRequired,
};
export default Tab;
