import styled from 'styled-components';
const IMG_API = 'http://image.tmdb.org/t/p/w1280'

const Movie = ({ title, poster_path, overview, vote_average }) => {
    return (
        <MovieDiv>
            <img src={IMG_API + poster_path} alt={title}/>
        </MovieDiv>
    );
};

export default Movie;

const MovieDiv = styled.div`
    flex: 0 1 21%;
    height: auto;
    display: flex;
    margin: 2%;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    & img{
        max-width: 100%;
    }
`

const MovieInfo = styled.div`
    display: flex;
    padding: 1rem;
    align-items: center;
    justify-content: space-between;
`

const H3 = styled.h3`
    margin: 0;
`

const Span = styled.span`
`