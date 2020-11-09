import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CurrencyFormat from '../common/CurrencyFormat';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const ImageContainer = styled.div`
  height: auto;
  position: relative;
`;

const Heart = styled.img`
  cursor: pointer;
  z-index: 1;
  position: absolute;
  width: auto;
  height: auto;
  top: 0;
  margin-top: 1vw;
  margin-left: 1.5vw;
`;

const Image = styled.img`
  width: 100%;
  min-height: 105px;
`;

const InfoTopContainer = styled.div`
  height: 30px;
  max-height: 30px;
`;

const InfoContainer = styled.div`
  align-content: center;
`;

const InfoMidContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  min-height: 80px;
  height: fit-content;
`;

const InfoBottomContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  height: 30px;
  align-items: center;
`;

const Span = styled.span.attrs(props => ({
  role: props.role,
}))`
  display: flex;
  display: -webkit-flex;
  font-size: 22px;
  color: #000000;
  word-break: keep-all;
  align-items: center;
  width: 100%;
  .expert {
    font-size: 1.2vw;
    font-weight: bold;
  }
  .title {
    margin-right: 10px;
    font-size: 1.5vw;
  }
  .price {
    font-size: 1.2vw;
    opacity: 0.5;
    flex: 2;
    text-decoration: line-through;
  }
  .salePercentage {
    font-size: 1.2vw;
    color: #465fcc;
    flex: 1;
  }
  .salePrice {
    font-size: 1.6vw;
    font-weight: bold;
    flex: 3;
    justify-content: flex-end;
    margin-right: 15px;
  }
  .endTime {
    width: 100%;
    justify-content: center;
    height: 23px;
    margin-right: 10px;
    border-radius: 41px;
    background-color: #ff584d;
    font-size: 1vw;
    font-weight: bold;
    max-width: 130px;
    min-width: 65px;
  }
`;

const LecturePreview = ({
  id,
  imageUrl,
  heartUrl,
  expert,
  category,
  endTime,
  title,
  price,
  salePercentage,
}) => (
  <Container>
    <ImageContainer>
      <Heart src={heartUrl} />
      <Image src={imageUrl} />
    </ImageContainer>
    <InfoContainer>
      <InfoTopContainer>
        <Span>
          <Span className="expert">
            {expert} . {category}
          </Span>
          <Span className="endTime">
            <span role="img" aria-label="time">
              ⏰ {endTime}
            </span>
          </Span>
        </Span>
      </InfoTopContainer>
      <InfoMidContainer>
        <Span>
          <Span className="title">{title}</Span>
        </Span>
      </InfoMidContainer>
      {price !== 0 && (
        <InfoBottomContainer>
          <Span>
            <Span className="price">
              <CurrencyFormat price={price} />
            </Span>
            <Span className="salePercentage">{salePercentage}%</Span>
            <Span className="salePrice">
              <CurrencyFormat price={price} salePercentage={salePercentage} />
            </Span>
          </Span>
        </InfoBottomContainer>
      )}
    </InfoContainer>
  </Container>
);

LecturePreview.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  heartUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  expert: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  price: PropTypes.number,
  salePercentage: PropTypes.number,
};

LecturePreview.defaultProps = {
  heartUrl: '',
  price: 0,
  salePercentage: 0,
};
export default LecturePreview;
