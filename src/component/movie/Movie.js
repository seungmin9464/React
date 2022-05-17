import styled from 'styled-components';

const Movie = ({ movie }) => {
  return (
    <Card>
      <div>{ movie.title }</div>
      <img src={"http://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt=''/>
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
    width: 120px;
    height: 36px;
    font-size: 12px;
  }
  & img{
    width: 100%;
    height: 25vh;
    object-fit: cover;
    border-radius: 1rem;
    padding: 5px;
    box-sizing: border-box;
  }
`