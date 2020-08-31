import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 12px;
  border: 1px solid;
  background-color: white;
  display: flex;
  flex-direction: column;
  position: relative;
  left: 5px;
  bottom: 10px;
  width: calc(100% - 10px);
  padding-top: 66.6%;
`;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  top: 0;
  background-position: center center;
  transition: opacity 0.1s linear;
  width: 100%;
  height: 80%;
  margin: 5px auto;
`;

const ImageContainer = styled.div`
  margin-bottom: 30px;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
  }
`;

const Title = styled.span`
  display: block;
  font-size: 2.5vw;
  margin-left: 10px;
`;

const Date = styled.span`
  margin-left: 10px;
  margin-bottom: 5px;
  font-size: 2vw;
`;

const Tag = styled.span``;

const LecturePreview = ({ id, title, imageUrl, date }) => (
  <Container>
    <ImageContainer>
      <Image bgUrl={imageUrl} />
    </ImageContainer>
    <Title>{title.length > 18 ? `${title.substring(0, 15)}...` : title}</Title>
    <Date>{date}</Date>
  </Container>
);

LecturePreview.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default LecturePreview;
