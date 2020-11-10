import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Emoji from '../common/Emoji';
import CurrencyFormat from '../common/CurrencyFormat';

const marginTop = css`
  ${({ marginTopValue }) => marginTopValue && `margin-top : ${marginTopValue};`}
`;

const marginLeft = css`
  ${({ marginLeftValue }) =>
    marginLeftValue && `margin-left : ${marginLeftValue};`}
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  cursor: pointer;
  ${marginTop}
`;

const ImageContainer = styled.div`
  height: 100%;
`;

const InfoContainer = styled.div`
  ${marginTop}
  ${marginLeft}
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 100%;
  min-height: 105px;
`;

const PriceInfoContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  word-break: keep-all;
`;

const TimeContainer = styled.div`
  width: 100%;
  height: 30px;
  background-color: #ff584d;
  border-radius: 41px;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  max-width: 180px;
  min-width: 140px;
`;

const Time = styled.span`
  margin-right: 10px;
  font-size: 1.5vw;
  font-weight: bold;
  @media only screen and (max-width: 600px) {
    font-size: 2vw;
  }
`;

const LectureInfoContainer = styled.div`
  width: 100%;
`;

const TutorInfoSpan = styled.span`
  display: flex;
  ${marginTop}
  color: #000000;
  word-break: keep-all;
  align-items: center;
  width: 100%;
  opacity: 0.8;
  font-size: 1.5vw;
  font-weight: bold;
  text-align: left;
  color: #000000;
`;

const TitleSpan = styled.span`
  font-size: 2vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  word-break: keep-all;
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

const BeforeSaleContainer = styled.div`
  display: flex;
  display: -webkit-flex;
`;

const Price = styled.span`
  font-size: 1.2vw;
  opacity: 0.5;
  flex: 2;
  text-decoration: line-through;
`;

const SalePercentage = styled.span`
  font-size: 1.2vw;
  color: #465fcc;
  flex: 1;
  ${marginLeft}
`;

const SalePrice = styled.span`
  font-size: 1.6vw;
  font-weight: bold;
  flex: 3;
  justify-content: flex-end;
  margin-right: 15px;
  ${marginTop}
`;

const HorizontalLecture = ({
  id,
  imageUrl,
  title,
  endTime,
  liked,
  comment,
  expert,
  category,
  price,
  salePercentage,
  btnTitle,
}) => (
  <Link to={`/lecturedetail/${id}`}>
    <Container marginTopValue="20px">
      <ImageContainer>
        <Image src={imageUrl} />
      </ImageContainer>
      <InfoContainer marginTopValue="10px" marginLeftValue="10px">
        <TimeContainer>
          <Emoji size="20px" label="clock" symbol="⏰" />
          <Time> &nbsp;{endTime}</Time>
        </TimeContainer>

        <LectureInfoContainer>
          <TutorInfoSpan marginTopValue="10px">
            {expert} . {category}
          </TutorInfoSpan>
          <TitleSpan>{title}</TitleSpan>
        </LectureInfoContainer>
        <ButtonContainer>
          <Button btnColor="gray" btnHeight="30px">
            <ButtonInsideImage src={heartUrl} />
            &nbsp;&nbsp;{liked}k
          </Button>
          <Button btnColor="gray" btnHeight="30px">
            <ButtonInsideImage src={commentUrl} />
            &nbsp;&nbsp;{comment}개
          </Button>
        </ButtonContainer>
      </InfoContainer>
      <PriceInfoContainer>
        {salePercentage !== 0 && (
          <BeforeSaleContainer>
            <Price>
              <CurrencyFormat price={price} />
            </Price>
            <SalePercentage marginLeftValue="10px">
              {salePercentage}%
            </SalePercentage>
          </BeforeSaleContainer>
        )}
        <SalePrice marginTopValue="5px">
          <CurrencyFormat price={price} salePercentage={salePercentage} />
        </SalePrice>
        <ButtonContainer marginTopValue="10px">
          <Button btnColor="#465fcc" btnHeight="40px">
            {btnTitle}
          </Button>
        </ButtonContainer>
      </PriceInfoContainer>
    </Container>
  </Link>
);

HorizontalLecture.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  expert: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  liked: PropTypes.number,
  comment: PropTypes.number,
  price: PropTypes.number,
  salePercentage: PropTypes.number,
  btnTitle: PropTypes.string.isRequired,
};

HorizontalLecture.defaultProps = {
  liked: 0,
  comment: 0,
  price: 0,
  salePercentage: 0,
};

export default HorizontalLecture;
