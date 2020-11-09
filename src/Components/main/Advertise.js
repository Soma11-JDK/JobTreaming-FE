import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 172px;
  width: 100%;
  background-color: #e8feff;
  margin: 120px 0 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SpanContainer = styled.div`
  width: 100%;
  position: absolute;
  text-align: center;
`;
const Span = styled.span`
  opacity: 0.8;
  font-size: 3vw;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${props => props.textColor || 'black'};
`;

const smallRec = require('assets/AdvertiseRec/Rectangle.png');
const mediumRec = require('assets/AdvertiseRec/Rectangle@2x.png');
const largeRec = require('assets/AdvertiseRec/Rectangle@3x.png');

const ImageSetContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  display: -webkit-flex;
  position: relative;
  justify-content: ${props => props.alignImage};
  -webkit-justify-content: ${props => props.alignImage};
`;

const ImageContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
`;

const Image = styled.img`
  height: 172px;
  display: block;
  position: absolute;
  transform: rotate(${props => props.degree || 0});
  ${({ marginRight }) => marginRight && `margin-right: ${marginRight};`}
  ${({ marginLeft }) =>
    marginLeft && `margin-left: ${marginLeft};`}
  padding-right: 60px;
`;

function Advertise() {
  return (
    <Container>
      <ImageContainer>
        <ImageSetContainer>
          <Image
            src={smallRec}
            srcSet={`${smallRec} 300w, ${mediumRec} 768w, ${largeRec} 1280w`}
            degree="180deg"
          />
          <Image
            src={smallRec}
            srcSet={`${smallRec} 300w, ${mediumRec} 768w, ${largeRec} 1280w`}
          />
        </ImageSetContainer>
        <ImageSetContainer alignImage="flex-end">
          <Image
            src={smallRec}
            srcSet={`${smallRec} 300w, ${mediumRec} 768w, ${largeRec} 1280w`}
            degree="180deg"
          />
          <Image
            src={smallRec}
            srcSet={`${smallRec} 300w, ${mediumRec} 768w, ${largeRec} 1280w`}
          />
        </ImageSetContainer>
      </ImageContainer>
      <SpanContainer>
        <Span>지금 바로 강의 신청하면</Span>
        <Span textColor="#ff1e10"> 5000원 </Span>
        <Span>할인!</Span>
      </SpanContainer>
    </Container>
  );
}

export default Advertise;
