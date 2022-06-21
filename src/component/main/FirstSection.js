import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import { media } from '../../style/media_query';

const FirstSection = () => {
  return (
    <MainTyping name='MAIN'>
      <div>
        <Portfolio>
          PORT<br />FOLIO
          <div></div>
        </Portfolio>

        <Typing>
          Hello, I'm
          <Typewriter
            options={{
              strings: ['Seungmin', 'Publisher', 'Developer'],
              autoStart: true,
              loop: true,
            }}
          />
        </Typing>
      </div>
    </MainTyping>
  );
};

export default FirstSection;

const MainTyping = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  & > div{
    display: flex;
    max-width: 1400px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    margin: 0 auto;
  }
  ${media.mobile` 
    height: 100vh;
    top: -60px;
  `}
`

const Typing = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: absolute;
  font-size: 70px;
  font-weight: 600;
  font-family: pretendard;
  top: 0;
  ${media.medium`font-size: 35px;`}
`

const Portfolio = styled.h1`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  line-height: 1.2;
  font-size: 200px;
  font-weight: 900;
  font-family: pretendard;
  text-align: center;
  color: ${({ theme }) => theme.textColor};
  & > div{
    width: 100%;
    height: 270px;
    background-color: ${({ theme }) => theme.bgColor};
    opacity: 0.98;
    position: absolute;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
  }
  ${media.medium`
    font-size: 150px;
    & > div{ height: 200px; }
  `}
  ${media.mobile`
    font-size: 100px;
    & > div{ height: 140px; }
  `}
`