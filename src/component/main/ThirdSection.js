import styled from 'styled-components';
import { Link } from "react-router-dom";
import { media } from '../../style/media_query';
import SliderDiv from './include/third/Slider';

const linklist = [
  {
    id: 1,
    link: '/movie',
    name: '홈페이지',
  },
  // {
  //   id: 2,
  //   link: '',
  //   name: '상세보기'
  // },
]

const ThirdSection = () => {
  return (
    <ContentsWrap name='CONTENTS'>
      <div>
        <H1>CONTENTS</H1>
        <ContentsInner>
          <LeftDiv>
            <ContentsText>

              <div>
                <Title>
                  최신 영화와 곧 있음 개봉 될 영화의<br/>
                  정보들을 볼수 있도록 홈페이지를 제작하였습니다.
                </Title>
              </div>

              <LinkMove>
                {
                  linklist.map(item =>
                    <LinkList
                      key={item.id}>
                      <Link to={item.link}>
                        {item.name}
                      </Link>
                    </LinkList>)
                }
              </LinkMove>
            </ContentsText>
          </LeftDiv>

          <RightDiv>
            <ContentsArea>
              <Contents1 />
              <Contents2>BEAKFLIX</Contents2>
            </ContentsArea>
          </RightDiv>
        </ContentsInner>
      </div>
      <SliderDiv/>
    </ContentsWrap>
  );
};

export default ThirdSection;

const ContentsWrap = styled.div`
  width: 100%;
  height: auto;
  padding: 80px 30px;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  & > div{
    display: flex;
    max-width: 1400px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    width: 100%;
    margin: 0 auto;
  }
  ${media.desktop`
    & > div{
      width: inherit;
      margin: inherit;
      padding: 0;
      &:nth-child(2){
        margin-top: 100px;
      }
    }
  `}
  ${media.tablet`
    & > div{
      &:nth-child(2){
        margin-top: 50px;
      }
    }
  `}
`

const H1 = styled.h1`
  color: ${({ theme }) => theme.textColor};
  font-family: pretendard;
  font-weight: 500;
  font-size: 40px;
  bottom: 80px;
  width: 100%;
  &.hide{visibility: hidden;}
  ${media.desktop`
    font-size: 25px;
    text-align: center;
  `}
`

const ContentsInner = styled.div`
  width: 100%;
  height: calc(100vh - 300px);
  display: flex;
  align-items: center;
  ${media.desktop`
    flex-direction: column;
    height: 100vh;
  `}
  ${media.medium`
    flex-direction: column;
  `}
  ${media.mobile`
    flex-direction: column;
    height: 60vh;
  `}
`

const LeftDiv = styled.div`
  width: 35%;
  height: 80%;
  ${media.desktop`
    width: 100%;
    text-align: center;
  `}
  ${media.tablet`
    width: 100%;
    height: 50%;
  `}
  ${media.medium`
    width: 100%;
    height: 40%;
  `}
`

const ContentsText = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & div{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 30px;
  }
`

const Title = styled.h3`
  color: #858585;
  font-size: 20px;
  font-weight: 500;
  width: 100%;
  text-align: center;
  ${media.tablet`
    font-size: 18px;
    margin-top: 20px;
  `}
`

const LinkMove = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`

const LinkList = styled.ul`
  flex: 0 1 40%;
  box-sizing: border-box;
  & a{
    width: 100%;
    text-align: center;
    display: inline-block;
    background-color: ${({ theme }) => theme.footer};
    border: ${({ theme }) => theme.borderColor};
    font-family: pretendard;
    transition: ease .3s;
    border-radius: 50px;
    font-weight: 600;
    padding: 7px 0;
    &:hover{
      background-color: ${({ theme }) => theme.navPoint};
    }
  }
`

const RightDiv = styled.div`
  width: 65%;
  height: 80%;
  ${media.desktop`width: 100%;`}
  ${media.tablet`
    width: 100%;
    height: 50%;
  `}
`

const ContentsArea = styled.div`
  width: 100%;
  padding-top: 0px;
  height: 80%;
  position: relative;
  ${media.desktop`
    width: 100%;
    height: 100%;
  `}
  ${media.tablet`
    padding-top: 0px;
    height: 100%;
  `}
  ${media.medium`
    padding-top: 0px;
    height: 100%;
  `}
  ${media.mobile`
    height: 100%;
  `}
`

const Contents1 = styled.div`
  width: 70%;
  height: 90%;
  position: absolute;
  right: 100px;
  top: 0px;
  border: ${({ theme }) => theme.borderColor};
  ${media.desktop`

  `}
  ${media.medium`
    width: 85%;
    right: 0;
  `}
  ${media.tablet`
    font-size: 45px;
  `}
`

const Contents2 = styled.div`
  width: 70%;
  height: 90%;
  position: absolute;
  left: 100px;
  bottom: 0px;
  z-index: 1;
  background-color: ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.bgColor};
  font-weight: 900;
  letter-spacing: -4px;
  font-size: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ease .3s;
  ${media.desktop`

  `}
  ${media.tablet`
    font-size: 45px;
  `}
  ${media.medium`
    width: 85%;
    left: 0;
  `}
`