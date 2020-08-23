import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const Container = styled.div`
  overflow: hidden;
  margin: 10px 0px 50px 0px;
`;

const StyledSlider = styled(Slider)`
  .slick-slide img {
    max-width: 100%;
    min-height: 200px;
    max-height: 500px;
  }
  .slick-slide div {
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

const imgUrl = require('assets/tempBanner.png');

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
    // 슬라이더 세팅
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      centerMode: true,
      autoplay: true,
      autopalySpeed: 2000,
    };
    return (
      <Container>
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
