import styled from 'styled-components';
import { media } from "../../../style/media_query";

const Banner = ({ movie }) => {
  return (
    <BannerWrap>
      <BannerDiv>
        <img src={"http://image.tmdb.org/t/p/original" + movie.backdrop_path} alt='' />
      </BannerDiv>
    </BannerWrap>
  );
};

export default Banner;

const BannerWrap = styled.div`
  position: relative;
  height: 100%;
`

const BannerDiv = styled.div`
  position: relative;
  width: 100%;
  & img{ 
    width: 100%;
    top: 50%;
  }
  ${media.tablet`
  height: 450px;
  `}
  ${media.medium`
     height: 400px;
  `}
  ${media.mobile`
    height: 200px;
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