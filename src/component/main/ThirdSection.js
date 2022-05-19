import styled from 'styled-components';
import { Link } from "react-router-dom";
import { media } from '../../style/media_query';

const linklist = [
  {
    id: 1,
    link: '/netflex',
    name: '홈페이지',
  },
  {
    id: 2,
    link: '',
    name: '상세보기'
  },
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
                <Title>홈페이지 버튼을 눌러주세요. <br/>준비중입니다.</Title>
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
              <Contents2 />
            </ContentsArea>
          </RightDiv>
        </ContentsInner>

{/* 
        <ContentsInner>
          <LeftDiv>
            <ContentsText>

              <div>
                <Title>제목2</Title>
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
              <Contents2 />
            </ContentsArea>
          </RightDiv>
        </ContentsInner> */}
      </div>
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
`

const H1 = styled.h1`
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
  height: 60vh;
  display: flex;
  align-items: center;
  ${media.desktop`
    flex-direction: column;
    height: 100vh;
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
  ${media.tablet`width: 100%;`}
`

const ContentsText = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & div{
    padding: 0 30px;
  }
`

const Title = styled.h3`
  font-size: 24px;
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
  height: 100%;
  ${media.desktop`width: 100%;`}
  ${media.tablet`
    width: 100%;
    height: 150%;
  `}
  ${media.medium`
    height: 100%;
  `}
  ${media.mobile`
    height: 100%;
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
  height: 100%;
  position: absolute;
  right: 100px;
  bottom: 25px;
  border: ${({ theme }) => theme.borderColor};
  ${media.desktop`
    width: 100%;
    height: 100%;
    right: -20px;
    bottom: 30px;
  `}
  ${media.tablet`
    width: 100%;
    height: 70%;
    right: -20px;
    bottom: 40px;
  `}
  ${media.mobile`
    width: 90%;
    height: 65%;
    right: 0px;
    bottom: 70px;
  `}
`

const Contents2 = styled.div`
  width: 70%;
  height: 100%;
  position: absolute;
  left: 100px;
  top: 25px;
  z-index: 1;
  background-color: ${({ theme }) => theme.textColor};
  ${media.desktop`
    width: 100%;
    left: -20px;
    height: 100%;
    top: 30px;
  `}
  ${media.tablet`
    width: 100%;
    height: 70%;
    left: -20px;
    top: 40px;
  `}
  ${media.mobile`
    width: 90%;
    height: 65%;
    left: 0px;
    top: 70px;
  `}
`