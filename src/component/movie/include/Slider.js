import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; import "slick-carousel/slick/slick-theme.css";
import Movie from "../Movie";
import styled from 'styled-components';
import { media } from '../../../style/media_query'

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  infinite: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
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
              key={movie.id}
              trand={ trand }
              movie={movie} />
          })
        }
      </Slider>

      <SlideTitle>지금 뜨는 콘텐츠</SlideTitle>
      <Slider {...settings}>
        {
          filtered.map((movie) => {
            return <Movie
              key={movie.id}
              movie={movie} />
          })
        }
      </Slider>

      <SlideTitle>현재 가장 인기있는</SlideTitle>
      <Slider {...settings}>
        {
          rated.map((movie) => {
            return <Movie
              key={movie.id}
              movie={movie} />
          })
        }
      </Slider>

      <SlideTitle>개봉 예정 중인</SlideTitle>
      <Slider {...settings}>
        {
          comming.map((movie) => {
            return <Movie
              key={movie.id}
              movie={movie} />
          })
        }
      </Slider>
    </SlideWrap>
  );
};

export default SliderDiv;

const SlideWrap = styled.div`
  padding: 0 20px;
  max-width: 1400px;
  overflow: hidden;
  margin: 0 auto;
`

const SlideTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin: 40px 0 10px;
  color: #a0a0a0;
  &:first-of-type{
    margin-top: 0px;
  }
  ${media.medium`
    font-size: 18px;
    margin: 20px 0 10px;
  `}
`