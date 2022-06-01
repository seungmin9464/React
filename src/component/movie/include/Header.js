import { useEffect } from "react";
import styled from 'styled-components';

const Header = ({
  popular,
  setFiltered,
  activeGenre,
  setActiveGenre
}) => {

  useEffect(() => {
    if(activeGenre === 0){
      setFiltered(popular)
      return
    }
    const filtered = popular.filter((movie) => 
      movie.genre_ids.includes(activeGenre)
    )
    setFiltered(filtered)
  }, [activeGenre])

  return (
    <HeaderDiv>
      <FilterContainer>
        <LeftDiv>
          <Logo>
            BEAKFLIX
          </Logo>
          <BtnWrap>
            <button
              onClick={() => setActiveGenre(0)}>All</button>
            <button
              onClick={() => setActiveGenre(28)}>TV</button>
            <button
              onClick={() => setActiveGenre(18)}>Movie</button>
            <button
              onClick={() => setActiveGenre(18)}>Trend</button>
          </BtnWrap>
        </LeftDiv>

        <RightDiv>
          menu
        </RightDiv>
      </FilterContainer>
    </HeaderDiv>
  );
};

export default Header;

const HeaderDiv = styled.header`
  z-index: 10;
  position: fixed;
  display: flex;
  background-color: #000;
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
`

const LeftDiv = styled.div`
  display: flex;
  height: 50px;
  align-items: flex-end;
`
const Logo = styled.div`
  color: #e50914;
  font-weight: 900;
  font-size: 30px;
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