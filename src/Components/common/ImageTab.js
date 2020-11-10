/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TabContainer = styled.div`
  width: 50%;
  height: 50px;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
`;

const List = styled.ul`
  width: 100%;
  display: flex;
  display: -webkit-flex;
  justify-content: space-evenly;
`;

const Item = styled.li`
  text-align: center;
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.img``;

const SpanContainer = styled.div`
  display: flex;
  display: -webkit-flex;
`;

const Span = styled.span`
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${props => (props.fontColor ? props.fontColor : '#000000')};
  opacity: ${props => (props.current ? '1' : '0.5')};
  word-break: keep-all;
`;

const ImageTab = ({ tabInfo, nowTab, nowPage }) => {
  const [tabTitle, setTabTitle] = useState(nowTab);

  useEffect(() => {
    setTabTitle(nowTab);
  });
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
          const { activeIcon, noActiveIcon, title, state } = info;
          return (
            <Item key={idx} onClick={() => handleClick(state)}>
              {console.log(`tabtitle: ${tabTitle} state: ${state}`)}
              <SLink
                current={tabTitle === state ? 1 : 0}
                to={
                  // eslint-disable-next-line no-nested-ternary
                  nowPage === 'myPage'
                    ? state === 'notification'
                      ? `/mypage/notification/notification`
                      : `/mypage/${state}`
                    : '/'
                }
              >
                <Icon src={tabTitle === state ? activeIcon : noActiveIcon} />
                <SpanContainer>
                  <Span current={tabTitle === state ? 1 : 0}>{title}</Span>
                  <Span
                    current={tabTitle === state ? 1 : 0}
                    fontColor="#465fcc"
                  >
                    (03)
                  </Span>
                </SpanContainer>
              </SLink>
            </Item>
          );
        })}
      </List>
    </TabContainer>
  );
};

ImageTab.propTypes = {
  tabInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
  nowTab: PropTypes.string.isRequired,
  nowPage: PropTypes.string.isRequired,
};

export default ImageTab;
