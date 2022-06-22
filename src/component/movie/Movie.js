import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { media } from '../../style/media_query'

const Movie = ({ movie, media_type }) => {
  return (
    <Card>
      <Link to={`/${media_type ? media_type : movie.media_type}/${movie.id}`}>
        <img src={"http://image.tmdb.org/t/p/w500" + movie.poster_path} alt='' />
      </Link>
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
    height: auto;
    object-fit: cover;
    border-radius: 1rem;
    padding: 5px;
    box-sizing: border-box;
  }
  ${media.mobile`
    & img{
      padding: 0;
      height: 180px;
    }        
  `}
`