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
    <FilterContainer>
      <LeftDiv>
        <Logo>
          NETFLEX
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

    </FilterContainer>
  );
};

export default Header;

const FilterContainer = styled.header`
  display: flex;
  width: 100%;
  padding: 0px 20px;
  height: 50px;
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