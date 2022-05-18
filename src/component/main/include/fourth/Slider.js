import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    className: "center",
    centerPadding: "100px",
    afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
    ]
  };

const SliderDiv = () => {
    return (
        <SlideWrap>
            <h2>홈페이지 퍼블리싱</h2>
            <SlideInner>
                <Slider {...settings}>
                    <SlideContents>
                        <Contents>1</Contents>
                    </SlideContents>
                    <SlideContents>
                        <Contents>2</Contents>
                    </SlideContents>
                    <SlideContents>
                        <Contents>3</Contents>
                    </SlideContents>
                    <SlideContents>
                        <Contents>4</Contents>
                    </SlideContents>
                    <SlideContents>
                        <Contents>5</Contents>
                    </SlideContents>
                    <SlideContents>
                        <Contents>6</Contents>
                    </SlideContents>
                </Slider>
            </SlideInner>
        </SlideWrap>
    );
};

export default SliderDiv;

const SlideWrap = styled.div`
    width: 100%;
    max-width: 1400px;
    height: auto;
    margin-top: 30px;
    margin-bottom: 50px;
    padding: 0px 70px;
    & h2{
        font-family: pretendard;
        font-weight: 500;
        font-size: 40px;
        color: #333;
    }
`

const SlideInner = styled.div`
    margin-top: 20px;
`

const SlideContents = styled.div`
    padding: 0 10px;
    box-sizing: border-box;
`

const Contents = styled.div`
    background-color: #ddd;
    box-sizing: border-box;
`