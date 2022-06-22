import Movie from "../Movie";
import styled from 'styled-components';
import { media } from '../../../style/media_query'

// 스와이퍼 js
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import React, { useEffect, useState } from 'react';

const SliderDiv = ({
  trand,
  popular,
  comming
}) => {
  const slide = [
    {id : 1, title: '최신 트렌드', name: trand, media_type: null},
    {id : 2, title: '인기 영화', name: popular, media_type: 'movie'},
    {id : 3, title: '개봉 예정 영화', name: comming, media_type: 'movie'},
  ]

  return (
    <>
      {
        slide.map((item) => <SlideInner key={item.id}>
          <SlideWrap>
          <h2>{item.title}</h2>

          <SlideInner>
            <Swiper
              slidesPerView={3}
              spaceBetween={2}
              scrollbar={{ draggable: true }}
              pagination={{ clickable: true }}
              loop={true}
              breakpoints={{
                768: {
                  slidesPerView: 5,
                },
                1024: {
                  slidesPerView: 7,
                },
              }}
            >
              {
                item.name.map((movie) =>
                  <SwiperSlide key={movie.id}>
                    <SlideContents>
                      <Contents>
                        <Movie movie={movie} media_type={item.media_type} />
                      </Contents>
                    </SlideContents>
                  </SwiperSlide>
                )
              }
            </Swiper>
          </SlideInner>
        </SlideWrap>
        </SlideInner>)
      }
    </>
  );
};

export default SliderDiv;

const SlideWrap = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 100%;
  margin: 0px auto;
  box-sizing: border-box;
  padding: 0px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  & h2{
    font-family: pretendard;
    font-weight: 500;
    font-size: 25px;
    text-align: left;
    width: 100%;
    color: #8d8d8d;
    padding-left: 10px;
  }
  ${media.pc`
    text-align: center;
  `}
  ${media.desktop`
    margin: 20px auto;
    padding: 0 10px;
    & h2{
      font-size: 25px;
    }
  `}
  ${media.tablet`
    margin: 20px auto;
  `}
  ${media.mobile`
    padding: 0px 10px;
  `}
`

const SlideInner = styled.div`
     margin-top: 20px;
     width: 100%;
     & > div{
       color: #fff;
       height: auto;
     }
     ${media.desktop`
    `}
 `

const SlideContents = styled.div`
  padding: 0 10px;
  box-sizing: border-box;
  ${media.mobile`
    padding: 0;
  `}
`

const Contents = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   & a{
    width: 100%;
    height: 100%;
    display: block;
    overflow: hidden;
    & img{ width: 100%; }
   }
   ${media.mobile`
    padding: 0 5px;
  `}
 `