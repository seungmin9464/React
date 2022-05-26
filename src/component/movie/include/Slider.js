import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import React, { useEffect, useState } from 'react';
import Movie from "../Movie";
import styled from 'styled-components';

const SliderDiv = ({ 
  filtered, 
  rated,
  comming,
  trand }) => {
  return (
    <SlideWrap>
      <SlideTitle>트렌드 콘텐츠</SlideTitle>
      <Swiper>
        {
          trand.map((movie) => {
            return <Movie
            key={ movie.id }
            movie={ movie }
            onClick={ () => {} }/>
          })
        }
      </Swiper>

      <SlideTitle>지금 뜨는 콘텐츠</SlideTitle>
      <Swiper>
        {
          filtered.map((movie) => {
            return <Movie
            key={ movie.id }
            movie={ movie }
            onClick={ () => {} }/>
          })
        }
      </Swiper>

      <SlideTitle>현재 가장 인기있는</SlideTitle>
      <Swiper>
        {
          rated.map((movie) => {
            return <Movie
              key={ movie.id }
              movie={ movie }/>
          })
        }
      </Swiper>

      <SlideTitle>개봉 예정 중인</SlideTitle>
      <Swiper>
        {
          comming.map((movie) => {
            return <Movie
              key={ movie.id }
              movie={ movie }/>
          })
        }
      </Swiper>
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