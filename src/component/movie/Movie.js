import { Link, NavLink } from 'react-router-dom';
import { media } from "../../style/media_query";
import styled from 'styled-components';
const Movie = ({ movie }) => {
  return (
    <Card>
      <img src={"http://image.tmdb.org/t/p/w500" + movie.poster_path} alt='' />
    </Card>
  );
};

export default Movie;

const Card = styled.div`
  & div{
    position: absolute;
    bottom: 20px;
    color: #fff;
    font-weight: 600;
    margin-left: 10px;
    width: 100px;
    height: 36px;
    font-size: 12px;
    word-break: keep-all;
  }
  & img{
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 1rem;
    padding: 5px;
    box-sizing: border-box;
  }
  ${media.mobile`
    & img{
      height: auto;
    }
  `}
`