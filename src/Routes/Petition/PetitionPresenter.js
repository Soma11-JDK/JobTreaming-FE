import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Subtitle from 'Components/common/Subtitle';
import Dropdown from 'Components/common/Dropdown';
import HorizontalPetition from 'Components/petition/HorizontalPetition';

import { connect, useSelector } from 'react-redux';
import * as userActions from 'redux/modules/user';
import { bindActionCreators } from 'redux';

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
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const PetitionInfoContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  display: -webkit-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 100px;
  background-color: #fff6a9;
`;

const unionImageUrl = require('assets/Union/Union.png');
const petitionInfoImageUrl = require('assets/PetitionInfo/petitionInfo.png');

const ImageContainer = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  ${marginLeft}
  align-items: center;
`;

const UnionImage = styled.img`
  width: 100%;
  height: 60%;
  transform: translate(-30%, -30%);
`;

const PetitionInfoImage = styled.img`
  width: 100%;
  height: 80%;
  @media only screen and (max-width: 600px) {
    height: 60%;
  }
  position: absolute;
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

const PetitionInputForm = styled.form`
  width: 80%;
`;

const Column = styled.div`
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  ${marginLeft}
`;

const PetitionWriteContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 80px;
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

const PetitionInputContent = styled.input`
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  flex: 1;
  width: 90%;
  height: 100px;
  border-radius: 58px;
  border-style: solid;
  border-color: rgba(164, 164, 164, 0.1);
  background-color: #ffffff;
  padding: 10px;
  margin: 10px;
`;

const BelowContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  padding: 80px;
`;

const ListContainer = styled.div`
  border-radius: 999px;
  width: 140px;
  ${marginTop}
`;

const Menu = styled.div`
  width: 140px;
  height: 68px;
  border: 1px solid black;
  border-radius: 999px;
  margin-right: 10px;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${props => props.bgColor};
`;

const PetitionPresenter = ({
  title,
  results,
  categoryIdx,
  contents,
  handleSubmit,
  updateTitle,
  updateContents,
  categoryItems,
}) => {
  const [dropdownCategory, setDropdown] = useState(false);
  const [categoryId, setCategory] = useState(parseInt(categoryIdx, 10));
  const user = useSelector(state => state.user);
  // const userData = user.get('loggedInfo').get('user');
  const userData = user.get('loggedInfo').get('user');
  useEffect(() => {
    setCategory(categoryIdx);
  });

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <Container>
      <PetitionInfoContainer>
        <ImageContainer marginLeftValue="10px">
          <UnionImage src={unionImageUrl} />
          <PetitionInfoImage src={petitionInfoImageUrl} />
        </ImageContainer>
        <Column marginLeftValue="50px">
          <Span fontWeight="500" fontSize="24px">
            원하는 강의가 없다면? 있게하자!
          </Span>
          <Span fontWeight="bold" fontSize="40px">
            내가 원하는 강의를
            <br /> 청원해주세요.
          </Span>
        </Column>
      </PetitionInfoContainer>
      <PetitionWriteContainer>
        <ProfileContainer>
          <ProfileImage src={userData.imageURL} />
          <Span marginTopValue="10px" fontWeight="bold">
            {userData.name}
          </Span>
        </ProfileContainer>
        <PetitionInputForm onSubmit={handleSubmit}>
          <PetitionInputContent
            placeholder="원하는 강의를 작성해주세요."
            value={contents}
            onChange={updateContents}
          />
        </PetitionInputForm>
        <Span fontWeight="bold" fontColor="#465fcc">
          청원하기
        </Span>
      </PetitionWriteContainer>
      <BelowContainer>
        <Subtitle title="청원 목록" />
        {/* <ListContainer
          marginTopValue="20px"
          onMouseEnter={() => onMouseEnter()}
          onMouseLeave={onMouseLeave}
        >
          <Menu>
            <Span fontSize="16px"> {categoryItems[categoryId].title} </Span>
          </Menu>
          {dropdownCategory && (
            <Dropdown categoryItems={categoryItems} nowPage="petition" />
          )}
          </ListContainer> */}
        {results &&
          results.length > 0 &&
          results.map(item => {
            // eslint-disable-next-line no-shadow
            const { user, contents, id, createdAt } = item;

            return (
              <HorizontalPetition
                key={id}
                id={id}
                type="getImage"
                user={user}
                contents={contents}
                createdAt={createdAt}
              />
            );
          })}
      </BelowContainer>
    </Container>
  );
};

PetitionPresenter.propTypes = {
  title: PropTypes.string.isRequired,
  categoryIdx: PropTypes.number.isRequired,
  contents: PropTypes.string.isRequired,
  updateTitle: PropTypes.func.isRequired,
  updateContents: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  categoryItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  results: PropTypes.arrayOf(),
};

PetitionPresenter.defaultProps = {
  results: null,
};

export default connect(null, dispatch => ({
  UserActions: bindActionCreators(userActions, dispatch),
}))(PetitionPresenter);
