import Slider from "react-slick";
import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css"; import "slick-carousel/slick/slick-theme.css";
import Movie from "../Movie";
import styled from 'styled-components';

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 3,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
  ]
};

const SliderDiv = ({ 
  filtered, 
  rated,
  comming,
  trand }) => {
  return (
    <SlideWrap>
      <SlideTitle>트렌드 콘텐츠</SlideTitle>
      <Slider {...settings}>
        {
          trand.map((movie) => {
            return <Movie
            key={ movie.id }
            movie={ movie }
            onClick={ () => {} }/>
          })
        }
      </Slider>

      <SlideTitle>지금 뜨는 콘텐츠</SlideTitle>
      <Slider {...settings}>
        {
          filtered.map((movie) => {
            return <Movie
            key={ movie.id }
            movie={ movie }
            onClick={ () => {} }/>
          })
        }
      </Slider>

      <SlideTitle>현재 가장 인기있는</SlideTitle>
      <Slider {...settings}>
        {
          rated.map((movie) => {
            return <Movie
              key={ movie.id }
              movie={ movie }/>
          })
        }
      </Slider>

      <SlideTitle>개봉 예정 중인</SlideTitle>
      <Slider {...settings}>
        {
          comming.map((movie) => {
            return <Movie
              key={ movie.id }
              movie={ movie }/>
          })
        }
      </Slider>
    </SlideWrap>
  );
};

export default SliderDiv;

const SlideWrap = styled.div`
  padding: 0 10px;
`

const SlideTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
  color: #fff;
  &:first-of-type{
    margin-top: 0px;
  }
`