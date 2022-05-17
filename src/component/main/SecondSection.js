import styled from 'styled-components';
import skilldata from '../main/asset/skilldata.json'
import { useState } from 'react';
import { media } from '../../style/media_query';
import { useTheme } from '../../context/themeProvider';

const SecondSection = () => {

  const [data, setData] = useState(skilldata)
  const publicUrl = process.env.PUBLIC_URL;
  const [ThemeMode, toggleTheme] = useTheme();

  return (
    <AboutArea name='ABOUT'>
      <div>
      <AboutAreaCenter>
        <LeftArea>
          <H1>ABOUT</H1>
          <Profile>
            <img src='./image/profile.jpg' alt='승민'/>
          </Profile>
        </LeftArea>

        <RightArea>
          <H1>SKILL</H1>
          <SkillWrap>
          {
            data.map(item => <SkillList
            key={ item.id }>
              <Skill>
                <div style={{ 
                  backgroundColor: ThemeMode === 'light' ? 
                  item.lightBg : 
                  item.darkBg
                }}>
                  <img 
                    src={ item.img}
                    alt={ item.title }/>
                </div>
                <p>{ item.title }</p>
              </Skill>
            </SkillList>)
          }
          </SkillWrap>
        </RightArea>
      </AboutAreaCenter>
      </div>
    </AboutArea>
  );
};

export default SecondSection;

const AboutArea = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 80px 30px;
  box-sizing: border-box;
  display: flex;
  & > div{
    display: flex;
    max-width: 1400px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    margin: 0 auto;
    width: 100%;
  }
  ${media.desktop`
    padding: 80px 100px;
    text-align: center;
  `}
  ${media.medium`
    padding: 40px 30px;
  `}
`

const AboutAreaCenter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  ${media.desktop`
    flex-direction: column;
  `}

`

const H1 = styled.h1`
    font-family: pretendard;
    font-weight: 500;
    font-size: 40px;
    color: ${({ theme }) => theme.textColor};
    ${media.desktop`font-size: 25px;`}
`

const LeftArea = styled.div`
  width: 30%;
  height: 100%;
  ${media.desktop`width: 100%;`}
`

const Profile = styled.div`
  width: 300px;
  height: 300px;
  margin: 20px auto;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  vertical-align: top;
  & img{
    width: 325px;
    margin-top: -20px;
  }
  ${media.desktop`
    & img{
      margin-top: 0px;
    }  
  `}
  ${media.mobile`
    width: 250px;
    height: 250px;
  `}
`

const RightArea = styled.div`
  width: 70%;
  height: 100%;
  ${media.desktop`
    width: 100%;
    margin-top: 40px;
  `}
`

const SkillWrap = styled.div`
  width: 100%;
  padding: 0 10px;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: calc(100% - 80px);
  justify-content: space-between;
  ${media.desktop`
    justify-content: space-between;
    margin-bottom: 15px;
  `}
  ${media.tablet`
    padding: 0;
  `}
`

const SkillList = styled.div`
  flex: 0 1 32%;
  margin: 15px 0;
  box-sizing: border-box;
  width: 100%;
  background-color: ${(props) => props.theme.contentsBg};
  border-radius: 20px;
  display: flex;
  ${media.desktop`
    flex: 0 1 48%;
    margin: 30px 0px;
  `}
  ${media.tablet`
    flex: 0 1 49%;
    margin: 25px 0px;    
  `}
`

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  & div{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.bgColor};
  }
  & img{
    width: 60px;
  }
  & p{
    font-family: pretendard;
    font-weight: 600;
    font-size: 20px;
    color: ${({ theme }) => theme.textColor};
    margin-top: 20px;
  }
  ${media.tablet`
    & p{
      font-size: 20px;
    }
  `}
  ${media.mobile`
    margin: 15px 0px;
    & div{
      width: 100px;
      height: 100px;
    }
    & img{
      width: 40px;
    }
    & p{
      font-size: 14px;
      margin-top: 10px;
    }
  `}
`