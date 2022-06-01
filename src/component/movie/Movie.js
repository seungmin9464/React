import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {media} from '../../style/media_query'

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
    width: 80px;
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
    ${media.medium`
      height: 180px;
    `}
  }
`