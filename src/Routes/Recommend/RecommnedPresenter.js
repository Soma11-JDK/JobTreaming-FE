import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import LecturePreview from 'Components/lecture/LecturePreview';
import Message from 'Components/common/Message';

const marginTop = css`
  ${({ marginTopValue }) => marginTopValue && `margin-top : ${marginTopValue};`}
`;

const marginBottom = css`
  ${({ marginBottomValue }) =>
    marginBottomValue && `margin-bottom : ${marginBottomValue};`}
`;

const marginLeft = css`
  ${({ marginLeftValue }) =>
    marginLeftValue && `margin-left : ${marginLeftValue};`}
`;

const Container = styled.div``;

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

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  background: #ffffff center right no-repeat;
  background-origin: content-box;
  align-items: center;

  border-radius: 66px;
  border: 2px solid #000000;
  padding-left: 20px;
  padding-right: 24px;
  width: 50%;
  height: 72px;
  font-weight: normal;
  font-size: 1.8vw;
  margin-top: 60px;
  ::placeholder {
    color: #000000;
    opacity: 0.7;
  }
`;

const LectureViewContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 80px;
`;

const LectureGird = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const heartUrl = require('assets/Heart/Heart.png');

const RecommendPresenter = ({
  results,
  searchTerm,
  handleSubmit,
  updateTerm,
}) => (
  <Container>
    <PetitionInfoContainer>
      <ImageContainer marginLeftValue="10px">
        <UnionImage src={unionImageUrl} />
        <PetitionInfoImage src={petitionInfoImageUrl} />
      </ImageContainer>
      <Column marginLeftValue="50px">
        <Span fontWeight="500" fontSize="24px">
          어떤 강의를 들어야할지 모르겠다면?
          <br />
          키워드로 추천받자!
        </Span>
        <Span fontWeight="bold" fontSize="40px">
          키워드를 입력해주세요!
        </Span>
        <Span fontWeight="bold" fontSize="20px">
          강연이 없을시 자동으로 청원 등록됩니다.
        </Span>
      </Column>
    </PetitionInfoContainer>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="관심있는 강연을 검색하세요."
        value={searchTerm}
        onChange={updateTerm}
      />
    </Form>
    {console.log(`string? ${results}`)}
    <LectureViewContainer>
      <LectureGird>
        {results &&
          results.length > 0 &&
          results.map(item => {
            const {
              id,
              expertName,

              category,
              endedAt,
              title,
              price,
              salePercentage,
              fileName,
            } = item;
            return (
              <LecturePreview
                key={id}
                id={id}
                type="getImage"
                imageUrl={fileName}
                heartUrl={heartUrl}
                expert={expertName}
                category={category}
                endedAt={endedAt}
                title={title}
                price={price}
                salePercentage={salePercentage}
              />
            );
          })}
      </LectureGird>
    </LectureViewContainer>
    {results && results.length === 0 && (
      <Message text="청원이 등록 되었습니다! :)" color="#000000" />
    )}
  </Container>
);

RecommendPresenter.propTypes = {
  results: PropTypes.oneOfType(PropTypes.object, PropTypes.string),
  searchTerm: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
};

RecommendPresenter.defaultProps = {
  results: {},
  searchTerm: '',
};
export default RecommendPresenter;
