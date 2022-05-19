import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import { media } from '../../../../style/media_query';
import { useTheme } from '../../../../context/themeProvider';
import './style.scss'

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    className: "center",
    centerMode: true,
    centerPadding: "100px",
    afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
    responsive: [
      {
        breakpoint: 1600,
        arrows: false,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1100,
        arrows: false,
        settings: {
            slidesToShow: 1,
          }
      },
      {
        breakpoint: 850,
        arrows: false,
        settings: {
          centerPadding: "20px",
          slidesToShow: 1,
        }
      },
    ]
  };

const slideData = [
  {id: 1, img: './image/pub/img-pub1.png', link: 'https://www.kiwontech.com/'},
  {id: 2, img: './image/pub/img-pub2.png', link: 'https://secuecloud.co.kr/'},
  {id: 3, img: './image/pub/img-pub3.png', link: 'https://secu-email.com/'},
  {id: 4, img: './image/pub/img-pub4.png', link: 'http://withus.cc/'},
  {id: 5, img: './image/pub/img-pub5.png', link: 'https://kissu.co.kr/'},
  {id: 6, img: './image/pub/img-pub6.png', link: 'http://www.kpta.co.kr/science'},
  {id: 7, img: './image/pub/img-pub7.png', link: 'http://lbtraders.co.kr/main'},
  {id: 8, img: './image/pub/img-pub8.png', link: 'http://www.leehyobio.com/main'},
]

const SliderDiv = () => {
    return (
        <SlideWrap>
            <h2>홈페이지 퍼블리싱</h2>
            <SlideInner>
                <Slider {...settings}>
                  {
                    slideData.map(item => <SlideContents key={item.id}>
                      <Contents>
                        <a href={item.link} target='_blank'>
                          <img src={item.img}/>
                        </a>
                      </Contents>
                    </SlideContents>)
                  }
                </Slider>
            </SlideInner>
        </SlideWrap>
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
  & h2{
    font-family: pretendard;
    font-weight: 500;
    font-size: 40px;
    text-align: left;
    width: 100%;
      color: ${({ theme }) => theme.textColor};
    }
  ${media.pc`
    text-align: center;
  `}
  ${media.desktop`
    margin: 30px auto;
    padding: 0 0 80px;
    & h2{
      font-size: 25px;
      text-align: center;
    }
  `}
  ${media.mobile`
    padding: 0px 10px;
  `}
`

 const SlideInner = styled.div`
     margin-top: 20px;
     & > div{
       color: #fff;
       height: 300px;
     }
     ${media.desktop`
     margin-bottom: 50px;
      & > div{
        height: 200px;
      }
    `}
 `

 const SlideContents = styled.div`
     padding: 0 10px;
     box-sizing: border-box;
 `

 const Contents = styled.div`
   height: 300px;
   display: flex;
   align-items: center;
   justify-content: center;
   & a{
     width: 100%;
     height: 100%;
     display: block;
     & img{ width: 100%; }
   }
   ${media.desktop`
    height: 200px;
  `}  
 `