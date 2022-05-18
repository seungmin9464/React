import styled from 'styled-components';
import { media } from "../../../style/media_query";

const Banner = ({ movie }) => {
  return (
    <BannerDiv>
      <Gradiant/>
      <img src={"http://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt=''/>
    </BannerDiv>
  );
};

export default Banner;

const BannerDiv = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  & img{ 
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
  ${media.medium`
    height: 280px;
  `}
  ${media.mobile`
    height: 200px;
    & img{
      width: inherit;
      top: inherit;
      left: 50%;
      transform: translateX(-50%);
    }
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
  position: absolute;
  background: linear-gradient(transparent 98%,transparent ,#000);
  width: 100%;
  height: 100%;
  z-index: 999;
`