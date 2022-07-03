import { useEffect } from "react";
import { Link } from "react-router-dom";
import { media } from '../../../style/media_query';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderDiv>
      <FilterContainer>
        <LeftDiv></LeftDiv>

        <Logo>
          <Link to='/Net'>BEAKFLIX</Link>
        </Logo>

        <RightDiv></RightDiv>
      </FilterContainer>
    </HeaderDiv>
  );
};

export default Header;

const HeaderDiv = styled.header`
  z-index: 9999;
  position: fixed;
  display: flex;
  width: 100%;
  height: 80px;
  align-items: center;
`

const FilterContainer = styled.div`
  min-width: 1400px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  ${media.pc`
    min-width: inherit;
    width: 100%;
  `}
`

const LeftDiv = styled.div`
  display: flex;
  height: 50px;
  align-items: flex-end;
`
const Logo = styled.div`
  color: #fff;
  text-shadow: -1px 0px #333, 0px 1px #333, 1px 0px #333, 0px -1px #333;
  font-weight: 900;
  font-size: 30px;
  letter-spacing: -2px;
`
const BtnWrap = styled.div`
  margin-left: 10px;
  margin-bottom: 5px;
  & button{
    color: #fff;
  }
`

const RightDiv = styled.div`
`