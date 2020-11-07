import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NotificationContainer = styled.ul`
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  width: 100%;
`;

const InfoContainer = styled.li`
  margin-top: 20px;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: space-between;
  word-break: keep-all;
`;

const TagSpan = styled.span`
  font-weight: bold;
  opacity: ${props => props.fontOpacity};
  font-size: 24px;
`;

const TitleSpan = styled.span`
  opacity: ${props => props.fontOpacity};
  font-size: 22px;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  flex: 1;
`;

const DateSpan = styled.span`
  font-weight: 500;
  opacity: ${props => props.fontOpacity};
  font-size: 18px;
`;

const Line = styled.div`
  width: 100%;
  height: 0.8px;
  background-color: #000000;
  opacity: 0.4;
  margin-top: 10px;
`;

const Notification = ({ notiInfo }) => {
  return (
    <NotificationContainer>
      {notiInfo.map(item => {
        const { tag, title, date } = item;
        const fontOpacity = title.length > 40 ? 1 : 0.6;
        return (
          <>
            <InfoContainer>
              <TagSpan fontOpacity={fontOpacity}>[{tag}]</TagSpan>
              <TitleSpan fontOpacity={fontOpacity}>{title}</TitleSpan>
              <DateSpan fontOpacity={fontOpacity}>{date}</DateSpan>
            </InfoContainer>
            <Line />
          </>
        );
      })}
    </NotificationContainer>
  );
};

Notification.propTypes = {
  notiInfo: PropTypes.arrayOf(
    PropTypes.shape({
      tag: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Notification;
