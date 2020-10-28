import React from 'react';

import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const marginBottom = css`
  ${({ marginBottomSize }) =>
    marginBottomSize && `margin-bottom: ${marginBottomSize};`}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 80%;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const ProfileContainer = styled.img`
  width: 104px;
  height: 104px;
  border-radius: 999px;
  ${marginBottom}
`;

const UsernameContainer = styled.span`
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
  ${marginBottom}
`;

const DateContainer = styled.span`
  opacity: 0.6;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
  ${marginBottom}
`;

const ContentContainer = styled.span`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
  word-break: keep-all;
`;

const ReviewPreview = ({ id, profileImageUrl, username, date, content }) => (
  <Container>
    <ProfileContainer src={profileImageUrl} marginBottomSize="24px" />
    <UsernameContainer marginBottomSize="6px">{username}</UsernameContainer>
    <DateContainer marginBottomSize="30px">{date}</DateContainer>
    <ContentContainer>{content}</ContentContainer>
  </Container>
);

ReviewPreview.propTypes = {
  id: PropTypes.number.isRequired,
  profileImageUrl: PropTypes.string,
  username: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

const defaultProfileImg = require('assets/tempProfile.png');

ReviewPreview.defaultProps = {
  profileImageUrl: defaultProfileImg,
};

export default ReviewPreview;
