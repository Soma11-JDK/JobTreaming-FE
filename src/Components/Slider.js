import React, { PureComponent, Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { func } from 'prop-types';

const Container = styled.div`
  overflow: hidden;
`;

const StyledSlider = styled(Slider)`
  .slick-slide img {
    max-width: 100%;
    min-height: 150px;
    max-height: 300px;
  }
  .slick-slide div {
    overflow: hidden;
    outline: none;
    text-align: center;
    justify-content: center;
    max-width: 100%;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  margin: 0px 13px;
`;

const Image = styled.img``;

const imgUrl = require('assets/testImage.jpg');

const items = [
  { id: 1, url: imgUrl },
  { id: 2, url: imgUrl },
  { id: 3, url: imgUrl },
  { id: 4, url: imgUrl },
  { id: 5, url: imgUrl },
  { id: 6, url: imgUrl },
  { id: 7, url: imgUrl },
  { id: 8, url: imgUrl },
  { id: 9, url: imgUrl },
  { id: 10, url: imgUrl },
];

export default class MultipleItems extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      centerMode: true,
    };
    return (
      <Container>
        <h2> Multiple items </h2>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <StyledSlider {...settings} style={{ width: '100%', padding: 0 }}>
          {items.map(item => {
            return (
              <div key={item.id}>
                <ImageContainer>
                  <Image src={item.url} />
                </ImageContainer>
              </div>
            );
          })}
        </StyledSlider>
      </Container>
    );
  }
}
