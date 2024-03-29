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

const Line = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 0.8px solid #000000;
  opacity: 0.4;
`;

const List = styled.ul`
  width: 50%;
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
  border-bottom: ${props => (props.current ? '2px' : '0.8px')} solid
    ${props => (props.current ? '#3918ff' : '#000000')};
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
  opacity: ${props => (props.current ? '1' : '0.9')};
  word-break: keep-all;
`;

const Tab = ({ tabInfo, nowTab, nowPage }) => {
  const [tabTitle, setTabTitle] = useState(nowTab);

  const history = useHistory();

  useEffect(() => {
    setTabTitle(nowTab);
  });

  const handleClick = state => {
    history.push({
      state,
    });

    return setTabTitle(state);
  };

  function checkPage(state) {
    let url = '';
    if (nowPage === 'myLecture') url = `/mylectureroom/${state}`;
    if (nowPage === 'tutor') url = `/tutor/${state}`;
    if (nowPage === 'notification') url = `/mypage/notification/${state}`;

    return url;
  }
  return (
    <TabContainer>
      <List>
        {tabInfo.map((info, idx) => {
          const { title, state } = info;

          return (
            <Item key={idx} onClick={() => handleClick(state)}>
              <SLink current={tabTitle === state ? 1 : 0} to={checkPage(state)}>
                {console.log(
                  `tabTitle: ${tabTitle} nowtab:${nowTab} state:${state}`,
                )}
                <Span current={tabTitle === state ? 1 : 0}>{title}</Span>
              </SLink>
            </Item>
          );
        })}
      </List>
      <Line />
    </TabContainer>
  );
};

Tab.propTypes = {
  tabInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
  nowTab: PropTypes.string.isRequired,
  nowPage: PropTypes.string.isRequired,
};
export default Tab;
