import axios from 'axios';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY, API_URL } from './Config';
import { media } from '../../style/media_query';
import { ImUser } from "react-icons/im";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, EffectCoverflow } from "swiper";
import Header from "./include/Header";
import DetailTab from './include/DetailTab';
import "swiper/css";

import Footer from './include/Footer';

const Detail = () => {

  let { id } = useParams()                            //id 값 받아오기
  let { media_type } = useParams()                    //타입 받아오기

  const [detailMovie, setDetailMovie] = useState()    //movie 상세
  const [detailTv, setDetailTv] = useState()          //tv 상세

  const [actorMovie, setActorMovie] = useState()      //movie actor list
  const [actorTv, setActorTv] = useState()            //tv actor list

  const [imageMovie, setImageMovie] = useState()      //movie poster list
  const [imageTv, setImageTv] = useState()            //tv actor list

  const [videoMovie, setVideoMovie] = useState()      //movie video list
  const [videoTv, setVideoTv] = useState()            //tv video list

  const [reviewMovie, setReviewMovie] = useState()    //movie review list
  const [reviewTv, setReviewTv] = useState()          //tv review list

  // 데이터 불러오기
  useEffect(() => {
    if (media_type === "movie") {

      axios.get(`${API_URL}movie/${id}?api_key=${API_KEY}&language=ko-KR`)
        .then(res => setDetailMovie(res.data));

      axios.get(`${API_URL}movie/${id}/credits?api_key=${API_KEY}&language=ko-KR`)
        .then((res) => setActorMovie(res.data));

      axios.get(`${API_URL}movie/${id}/images?api_key=${API_KEY}&language=en`)
        .then((res) => setImageMovie(res.data));

      axios.get(`${API_URL}movie/${id}/videos?api_key=${API_KEY}&language=ko-KR`)
        .then((res) => setVideoMovie(res.data));

    } else if (media_type === "tv") {

      axios.get(`${API_URL}tv/${id}?api_key=${API_KEY}&language=ko-KR`)
        .then(res => setDetailTv(res.data));

      axios.get(`${API_URL}tv/${id}/credits?api_key=${API_KEY}&language=ko-KR`)
        .then((res) => setActorTv(res.data));

      axios.get(`${API_URL}tv/${id}/images?api_key=${API_KEY}&language=en`)
        .then((res) => setImageTv(res.data));

      axios.get(`${API_URL}tv/${id}/videos?api_key=${API_KEY}&language=ko-KR`)
        .then((res) => setVideoTv(res.data));
    }
  }, [])

  // 데이터 조회
  if (media_type === "movie") {
    if (!detailMovie || !actorMovie || !imageMovie || !videoMovie) return false
  } else if (media_type === "tv") {
    if (!detailTv || !actorTv || !imageTv || !videoTv) return false
  }

  // 비디오 데이터 없는 경우 처리
  const videoWrap = () => {
    try {
      if (typeof videoMovie != 'undefined') {
        return <SlideWrap>
          <h1>VIDEO</h1>
          <p>예고편</p>

          <iframe src={`https://www.youtube.com/embed/${videoMovie.results[0].key}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
        </SlideWrap>
      } else if (typeof videoTv != 'undefined') {
        return <iframe src={`https://www.youtube.com/embed/${videoTv.results[0].key}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
      } else {
        return false;
      }
    } catch {
      return false;
    }
  }

  return (
    <>
      <Header/>
      <Wrap>
        <BgWrap>
          <Bg>
            <div className='bg1'>
              <img src={`http://image.tmdb.org/t/p/original${detailMovie ? detailMovie.backdrop_path : detailTv.backdrop_path}`} alt={detailMovie ? detailMovie.title : detailTv.title} />
              <Gradiant />
            </div>
            <div className='bg2'>
              <img src={`http://image.tmdb.org/t/p/original${detailMovie ? detailMovie.poster_path : detailTv.poster_path}`} alt={detailMovie ? detailMovie.title : detailTv.title} />
              <Gradiant />
            </div>

            <Contents>
              <MaxInner>
                <InfoWrap>
                  <Card>
                    <img src={`http://image.tmdb.org/t/p/w500${detailMovie ? detailMovie.poster_path : detailTv.poster_path}`} />
                  </Card>

                  <InfoInner>
                    <h1 className='title'>{detailMovie ? detailMovie.title : detailTv.name}</h1>
                    <p className='subTitle'>{detailMovie ? detailMovie.tagline : detailTv.tagline}</p>

                    <GenersWrap>
                      {
                        detailMovie?.genres.map((item) => <li key={item.id}>
                          {item.name}
                        </li>)
                      }
                      
                      {
                        detailTv?.genres.map((item) => <li key={item.id}>
                          {item.name}
                        </li>)
                      }
                    </GenersWrap>

                    <OverView>
                      <p className='overText'>{detailMovie ? detailMovie.overview : detailTv.overview}</p>
                    </OverView>
                  </InfoInner>
                </InfoWrap>
              </MaxInner>
            </Contents>
          </Bg>
        </BgWrap>

        <ContentsWrap>
          <MaxInner>
            <ContentsDiv>
              <SlideWrap>
                <h1>ACTOR</h1>
                <p>배우</p>
                <SlideDivWrap>
                  <Swiper
                    className='actorSlide'
                    slidesPerView={3}
                    spaceBetween={30}
                    autoHeight={false}
                    breakpoints={{
                      790: {
                        slidesPerView: 4,
                      },
                      1024: {
                        slidesPerView: 5,
                      },
                      1350: {
                        slidesPerView: 5,
                      },
                      1400: {
                        slidesPerView: 7,
                      },
                    }}>
                    {
                      actorMovie?.cast.map((item) => <SwiperSlide key={item.cast_id}>
                        <SlideDiv className='actor'>
                          {
                            item.profile_path ?
                              <img src={`http://image.tmdb.org/t/p/original${item.profile_path}`} /> :
                              <User><ImUser /></User>
                          }
                          <p className='actorName'>{item.name}</p>
                        </SlideDiv>
                      </SwiperSlide>
                      )
                    }

                    {
                      actorTv?.cast.map((item) => <SwiperSlide key={item.cast_id}>
                        <SlideDiv>
                          <img src={`http://image.tmdb.org/t/p/original${item.profile_path}`} />
                          <p className='actorName'>{item.name}</p>
                        </SlideDiv>
                      </SwiperSlide>
                      )
                    }
                  </Swiper>
                </SlideDivWrap>
              </SlideWrap>
            </ContentsDiv>

            <ContentsDiv className='contentsDiv'>
              {videoWrap('iframeMovie ? iframeTv : iframeMovie')}
            </ContentsDiv>

            <ContentsDiv className='posterWrap'>
              <SlideWrap>
                <h1>POSTER</h1>
                <p>포스터</p>
                <SlideDivWrap className='posterDivWrap'>
                  <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    mousewheel={true}
                    slidesPerView={3}
                    touchRatio={1}
                    loop={true}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination, Mousewheel]}
                    coverflowEffect={{
                      rotate: 0,
                      stretch: 0,
                      depth: 100,
                      modifier: 3,
                      slideShadows: false,
                    }}
                    breakpoints={{
                      790: {
                        slidesPerView: 6,
                      },
                    }}>
                    {
                      imageMovie?.posters.map((item) => <SwiperSlide key={item.file_path}>
                        <SlideDiv className='poster'>
                          <img src={`http://image.tmdb.org/t/p/w300${item.file_path}`} />
                        </SlideDiv>
                      </SwiperSlide>)
                    }

                    {
                      imageTv?.posters.map((item) =>
                        <SwiperSlide key={item.file_path}>
                          <SlideDiv className='poster'>
                            <img src={`http://image.tmdb.org/t/p/w300${item.file_path}`} />
                          </SlideDiv>
                        </SwiperSlide>)
                    }
                  </Swiper>
                </SlideDivWrap>
              </SlideWrap>
            </ContentsDiv>
          </MaxInner>

          {/* <ContentsDiv className='dis-n'>
            <SlideWrap>
              <DetailTab />
            </SlideWrap>
          </ContentsDiv> */}
        </ContentsWrap>
        <Footer />
      </Wrap>
    </>
  );
};

export default Detail;

const MaxInner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  height: 100vh;

  ${media.pc`
    max-width: inherit;
    padding: 0 30px;
  `}

  ${media.mobile`
    max-width: inherit;
    padding: 0 20px;
  `}
`

const Wrap = styled.div`
  background-color: #fff;
  position: relative;
  height: auto;
  overflow: hidden;
  & img{
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
  }
  & .footer{
    position: relative;
    margin-top: 40vh;
  }
`

const BgWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const Bg = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  top: 0;
  display: block;
  & > div{
    display: flex;
    align-items: center;
    justify-content: center;
    &.bg1{ display: flex }
    &.bg2{ display: none }
  }
  & img{
    max-width: 100%;
    min-width: 100%;
    height: 100vh;
  }

  ${media.pcMore`
    & img{
      max-width: inherit;
      min-width: inherit;
      height: 100vh;
      width: 100%;
    }
  `}

  ${media.pc`
    & img{
      width: inherit;
    }
  `}

  ${media.tablet`
    & img{
      height: 100vh;
      width: inherit;
    }
  `}

  ${media.mobile`
    & img{
      width: inherit;
    }
    & div{
      &.bg1{ display: none }
      &.bg2{ display: flex }
    }
  `}
`

const Gradiant = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 99;
  top: 0;
  background-color: rgba(0,0,0, .6);
  position: absolute;
`

const Contents = styled.div`
  width: 100%;
  height: 600px;
  z-index: 100;
  position: absolute;
  top: 100%;
  transform: translateY(-50%);

  & > div{
    height: 100%;
  }

  ${media.desktop`
    height: 450px;
  `}

  ${media.tablet`
    height: 750px;
    top: 96%;
  `}

  ${media.mobile`
    height: auto;
  `}
`

const InfoWrap = styled.div`
  width: 1150px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgba(225, 225, 225,  0.3);
  border-radius: 20px;
  box-shadow: 8px 8px 10px rgb(0, 0, 0, 10%);
  
  ${media.desktop`
    width: 100%;
  `}

  ${media.tablet`
    flex-direction: column;
    justify-content: space-evenly;
  `}

  ${media.mobile`
    border-radius: 10px;
    display: flex;
    justify-content: space-evenly;
    padding: 30px 0;
  `}
`

const Card = styled.div`
  width: 320px;
  height: 500px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-around;
  & img{
    max-width: 100%;
    height: auto;
  }

  ${media.desktop`
    width: 250px;
    height: 100%;
  `}

  ${media.tablet`
    height: initial;
  `}

  ${media.mobile`
    width: 180px;
  `}
`

const InfoInner = styled.div`
  width: calc(100% - 450px);
  height: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & .title{
    font-size: 50px;
    font-weight: 900;
    color: #fff;
  }
  & .subTitle{
    font-size: 25px;
    font-weight: 500;
    top: -10px;
    color: #c3c3c3;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  ${media.desktop`
    width: calc(100% - 400px);
    height: 100%;
    & .title{ font-size: 40px; }
    & .subTitle{ font-size: 18px; }
  `}

  ${media.tablet`
    width: 90%;
    & .title{ color: #333; }
    & .subTitle{ color: #a1a1a1; }
  `}

  ${media.tablet`
    height: initial;
  `}

  ${media.mobile`
    margin-top: 20px;
    & .title{ font-size: 20px; }
    & .subTitle{ font-size: 14px; }
  `}
`

const GenersWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0;
  & li{
    background-color: #666;
    padding: 5px 10px;
    box-sizing: border-box;
    border-radius: 5px;
    margin-right: 5px;
    color: #ddd;
    font-weight: 400; 
    margin-top: 5px;
  }

  ${media.tablet`
    margin: 0 0 5px 0;
  `}

  ${media.mobile`
    margin: 10px 0 5px;
    & li{
      padding: 3px 5px;
      border-radius: 3px;
      font-size: 14px;
    }
  `}
`

const OverView = styled.div`
  width: 100%;
  height: auto;
  margin: 20px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  & .overText{
    font-size: 20px;
    font-weight: 500;
    color: #333;
  }

  ${media.desktop`
    & .overText{font-size: 18px;} 
  `}

  ${media.tablet`
    margin: 10px 0;
  `}

  ${media.mobile`
    & .overText{
      font-size: 14px;
    }
  `}
`

// -----------------------------------------------

const ContentsWrap = styled.div`
  width: 100%;
  top: 40vh;
  position: inherit;
  & > div{height: auto}
  
  ${media.desktop`
    top: 450px;
  `}

  ${media.mobile`
    top: 300px;
  `}
`

const ContentsDiv = styled.div`
  width: 100%;
  height: auto;
  &:nth-child(n+2){
    margin-top: 15vh;
  }
  &:last-of-type{
    padding-bottom: 15vh;
  }
  & iframe{
    width: 100%;
    height: 800px;
    margin: 50px 0;
  }
  &.dis-n{display: none}
  & .posterDivWrap{
    overflow: hidden;
  }
  ${media.desktop`
    &:nth-child(n+2){
      margin-top: 10vh;
    }
    & iframe{
      height: 600px;
    }
  `}

  ${media.tablet`
    & iframe{
      height: 450px;
    }
  `}

  ${media.mobile`
    &:nth-child(n+2){
      margin-top: 0vh;
    }
    & iframe{
      height: 250px;
    }
  `}
`

// -----------------------------------------------

const SlideWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & .actorSlide{ 
    padding-right: 10px; 
    & .actor{
      align-items: center;
      & img{
        width: 150px !important;
        height: 225px !important;
      }
    }
  }
  & h1{
    width: 100%;
    text-align: center;
    font-size: 50px;
    font-weight: 900;
  }
  & p{
    width: 100%;
    margin-bottom: 0px;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    &.actorName{
      display: flex;
      height: 40px;
      align-items: center;
      justify-content: center;
    }
  }
  & .swiper-slide-active{
    & .poster{
      transform: scale(1.12);
    }
  }

  ${media.pc`
    & .actorSlide{
      & .actor{
        & img{
          width: 180px !important;
          height: 280px !important;
        }
      }
    }
  `}

  ${media.medium`
    & .swiper-3d{
      perspective: 3000px !important;
    }
    & .swiper-slide-active{
      & .poster{
      }
    }
  `}

  ${media.mobile`
    & .actorSlide{
      padding-left: 10px;
      & .actor{
        & img{
          width: 90px !important;
          height: 140px !important;
        }
      }
    }
    & p{
      margin-top: -15px;
      font-size: 16px;
      &.actorName{
        font-size: 14px;
        height: 42px;
      }
    }
    & h1{
      font-size: 40px;
    }
  `}
`

const User = styled.div`
  width: 150px;
  height: 225px;
  background-color: #ddd;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(171, 171, 171, 0.3);
  display: flex;
  position: relative;
  justify-content: center;
  & svg{
    font-size: 140px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  ${media.pc`
    width: 180px;
    height: 280px;
  `}
  ${media.mobile`
    width: 90px;
    height: 140px;
    & svg{
      font-size: 60px;
    }
  `}
`

const SlideDivWrap = styled.div`
  height: auto;
  padding: 50px 0;
  & .swiper-3d{
    overflow: inherit;
  }
  & .swiper-wrapper{
    display: flex;
    & .actor{
      
    }
    & .poster{
      align-items: center;
      img{
        width: 100%;
      }
    }
  } 
`

const SlideDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
  & > img{
    width: 100%;
    box-sizing: border-box;
  }
  & p{
    text-align: center;
    margin: 10px 0;
  }
  &.actor{
    & img{
      border-radius: 10px;
      box-shadow: 5px 5px 5px rgba(171, 171, 171, 0.3);
    }
  }
`



// -----------------------------------------------
