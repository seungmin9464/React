import { useState } from 'react';
import { useTheme } from '../../../context/themeProvider';
import { FaBars, FaTimes } from 'react-icons/fa'
import { media } from '../../../style/media_query';
import { Link } from 'react-scroll/modules';
import ThemeToggle from '../../../theme/ThemeToggle';
import styled from 'styled-components';

const headerMenu = [
  { id: '1', name: 'MAIN' },
  { id: '2', name: 'ABOUT' },
  { id: '3', name: 'CONTENTS' },
  { id: '4', name: 'CONTACT' },
]

const Header = () => {

  const [click, setClick] = useState(false)
  const [ThemeMode, toggleTheme] = useTheme();
  
  const handleClick = () => setClick(!click)
  const closeMenu = () => setClick(false)

  return (
    <>
      <HeaderDiv>
        <div>
          <LeftMenu>
            <Link to='/'>
              <img src='./image/logo.png'/>
            </Link>
          </LeftMenu>

          <RightMenu>
            <ThemeToggle toggle={toggleTheme} mode={ThemeMode}>
              DarkMode
            </ThemeToggle>

            <Burger onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </Burger>

            <RightMenuList className={click ? 'active' : ''}>
              { headerMenu.map(item =>
                  <Link
                    to={ item.name }
                    spy={ true }
                    smooth={ true }
                    duration={ 1300 }
                    offset={ -50 }
                    key={ item.id }>
                    <MenuItem
                      onClick={closeMenu} >
                      {item.name}
                    </MenuItem>
                  </Link> ) }
            </RightMenuList>
          </RightMenu>
        </div>
      </HeaderDiv>
    </>
  );
};

export default Header;

const HeaderDiv = styled.div`
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  z-index: 9999;
  background-color: ${({ theme }) => theme.bgColor};
  border-bottom: ${({ theme }) => theme.borderColor};
  & > div{
    max-width: 1400px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;
    height: 60px;
    padding: 0px 20px;
  }
  & a{ text-decoration: none; }
`

const LeftMenu = styled.div`
  display: flex;
  align-items: center;
  z-index: 9999;
  font-weight: 900;
  font-family: pretendard;
  font-size: 25px;
  letter-spacing: -2px;
  border-bottom: ${({ theme }) => theme.textColor};
  & a{
    width: 35px;
    display: flex;
    align-items: center;
    & img{ max-width: 100%; }
  }
`

const Burger = styled.div`
  width: 30px;
  height: 30px;
  color: ${({ theme }) => theme.textColor};
  display: none;
  align-items: center;
  font-size: 25px;
  z-index: 9999;
  cursor: pointer;
  ${media.medium`display: inline-block;`}
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  padding: 0;
`

const RightMenuList = styled.div`
  display: flex;
  ${media.medium`
    position: fixed;
    display: flex;
    left: 100%;
    top: 60px;
    transition: ease .3s;
    padding-top: 60px;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    align-items: center;
    background-color: ${({ theme }) => theme.bgColor};
    transition-delay: 1s;
    &.active{
      left: 0%;
    }
  `}
`

const MenuItem = styled.li`
  list-style: none;
  color: ${({ theme }) => theme.textColor};
  padding: 0 10px;
  font-size: 16px;
  position: relative;
  font-weight: 500;
  font-family: pretendard;
  z-index: 2;
  cursor: pointer;
  &::after{
    content: '';
    position: absolute;
    width: 0%;
    background-color: ${({ theme }) => theme.navPoint};
    height: 10px;
    bottom: 0;
    left: 10%;
    z-index: -1;
    transition: ease .3s;
  }
  &:hover{
    &::after{
      width: 80%;
    }
  }
  ${media.medium`
    font-size: 25px;
    font-weight: 900;
    padding: 30px 0;
    width: 100vw;
    text-align: center;
    &::after{
      bottom: 30px;
      height: 13px;
      left: -10%;
    }
    &:hover{
      &::after{
        /* width: 120%; */
        width: 30%;
        left: 50%;
        transform: translateX(-50%);
      }
    }
`} 
`