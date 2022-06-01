import styled from 'styled-components';
import { media } from "../../../style/media_query";

const Banner = ({ movie }) => {
  return (
    <BannerWrap>
      <BannerDiv>
        <Gradiant />
        <img src={"http://image.tmdb.org/t/p/original" + movie.backdrop_path} alt='' />
      </BannerDiv>
      <p>{movie.title}</p>
    </BannerWrap>
  );
};

export default Banner;

const BannerWrap = styled.div`
  position: relative;
  height: 100%;
  & p{
    position: absolute;
    margin: 30px;
    font-size: 24px;
    font-weight: 900;
    color: #fff;
    bottom: 0;
  }
  ${media.medium`
    & p{
      font-size: 16px;
    }
  `}
`

const BannerDiv = styled.div`
  position: relative;
  width: 100%;
  & img{ 
    width: 100%;
    top: 50%;
  }
  ${media.tablet`
    height: 75vh;
  `}
  ${media.medium`
     height: 40vh;
  `}
`

const BannerText = styled.div`
  position: absolute;
  z-index: 99;
  font-family: pretendard;
  font-size: 25px;
  font-weight: 600;
  padding-left: 20px;
  bottom: 20px;
  color: #fff;
`

const Gradiant = styled.div`

`