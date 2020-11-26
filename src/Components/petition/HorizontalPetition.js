import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const marginTop = css`
  ${({ marginTopValue }) => marginTopValue && `margin-top : ${marginTopValue};`}
`;

const marginBottom = css`
  ${({ marginBottomValue }) =>
    marginBottomValue && `margin-bottom : ${marginBottomValue};`}
`;

const marginRight = css`
  ${({ marginRightValue }) =>
    marginRightValue && `margin-right : ${marginRightValue};`}
`;

const marginLeft = css`
  ${({ marginLeftValue }) =>
    marginLeftValue && `margin-left : ${marginLeftValue};`}
`;

const Container = styled.div`
  display: flex;
  display: -webkit-flex;
  border-radius: 20px;
  box-shadow: 0 0 9px 3px rgba(164, 164, 164, 0.1);
  background-color: #ffffff;
  padding: 20px;
  ${marginTop}
`;

const ProfileContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  align-items: center;
`;

const profileUrl = require('assets/TestProfile/Mask Group.png');

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 999px;
`;

const ContentContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: space-between;
  ${marginLeft}
`;

const Span = styled.span`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  opacity: ${props => props.fontopacity};
  color: ${props => props.fontColor};
  word-break: keep-all;
  ${marginTop}
  ${marginBottom}
  ${marginLeft}
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  ${marginTop}
`;

const heartUrl = require('assets/WhiteHeart/WhiteHeart.png');
const commentUrl = require('assets/Comment/Comment.png');

const Button = styled.button`
  max-width: 120px;
  width: 100%;
  height: ${props => props.btnHeight};
  object-fit: contain;
  background-color: ${props => props.btnColor};
  opacity: 0.8;
  border-radius: 41px;
  color: white;
  margin-right: 10px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonInsideImage = styled.img`
  width: 30%;
  max-width: 20px;
`;

const defaultProfileImg = require('assets/DefaultProfile/DefaultProfile.png');

const HorizontalPetition = ({ user, createdAt, contents }) => {
  return (
    <Container marginTopValue="20px">
      <ProfileContainer>
        <ProfileImage
          src={user.imageURL === ' ' ? defaultProfileImg : user.imageURL}
        />
        <Span marginTopValue="10px" fontWeight="bold">
          {user.name}
        </Span>
      </ProfileContainer>
      <ContentContainer marginLeftValue="20px">
        <Span fontWeight="bold" fontopacity="0.6" fontColor="#000000">
          {createdAt.substring(0, 10)}
        </Span>
        <Span fontWeight="500" fontColor="#000000">
          {contents}
        </Span>
        <Button btnColor="gray" btnHeight="30px">
          <ButtonInsideImage src={heartUrl} />
          &nbsp;&nbsp;0k
        </Button>
      </ContentContainer>
    </Container>
  );
};

HorizontalPetition.propTypes = {
  user: PropTypes.arrayOf().isRequired,
  createdAt: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired,
};
export default HorizontalPetition;
