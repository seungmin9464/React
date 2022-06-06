import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { media } from '../../style/media_query'
import { useState, useEffect } from 'react';
import Detail from './Detail';
import { API_URL, API_KEY } from './Config';

const Movie = ({ movie }) => {


  const [detailMovie, setDetailMovie] = useState([])

  const popular = async () => {
    const viewMovie = await fetch(`${API_URL}movie/${movie.id}?api_key=${API_KEY}&language=ko`)

    const detailMovie = await viewMovie.json()

    setDetailMovie(detailMovie.results)
  }

  useEffect(() => {
    popular()
  })

  return (
    <Card>
      <Link to={`/movie/${movie.id}`} detailMovie={ detailMovie }>
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