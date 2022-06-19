import Movie from "../Movie";
import styled from 'styled-components';
import { media } from '../../../style/media_query'

// 스와이퍼 js
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import React from 'react';

const SliderDiv = ({
  trand,
  popular,
  comming
}) => {

  return (
    <>
      <SlideWrap>
        <h2>트렌드 영화 목록</h2>

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
              trand.map((movie) =>
                <SwiperSlide>
                  <SlideContents>
                    <Contents key={movie.id}>
                      <Movie movie={movie} />
                    </Contents>
                  </SlideContents>
                </SwiperSlide>
              )
            }
          </Swiper>
        </SlideInner>
      </SlideWrap>

      <SlideWrap>
        <h2>인기 영화</h2>

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
              popular.map((movie) =>
                <SwiperSlide>
                  <SlideContents>
                    <Contents key={movie.id}>
                      <Movie movie={movie} />
                    </Contents>
                  </SlideContents>
                </SwiperSlide>
              )
            }
          </Swiper>
        </SlideInner>
      </SlideWrap>

      <SlideWrap>
        <h2>개봉 예정 영화</h2>

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
              comming.map((movie) =>
                <SwiperSlide>
                  <SlideContents>
                    <Contents key={movie.id}>
                      <Movie movie={movie} />
                    </Contents>
                  </SlideContents>
                </SwiperSlide>
              )
            }
          </Swiper>
        </SlideInner>
      </SlideWrap>
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