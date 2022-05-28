import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from '../../../../../style/media_query';

function GridCards(props) {
    if (props.landingPage) {
        return (
            <Card>
                <CardInner style={{ position: 'relative' }}>
                    <Link to={`/movie/${props.movieId}`} >
                        <img src={props.image} alt={props.movieName} />
                    </Link>
                </CardInner>
            </Card>
        )
    } else {
        return (
            <Card>
                <CardInner style={{ position: 'relative' }}>
                    <img src={props.poster_path} alt={props.characterName} />
                </CardInner>
            </Card>
        )
    }
}

export default GridCards;

const Card = styled.div`
    overflow: hidden;
`

const CardInner = styled.div`
    & a{
        display: block;
        width: 100%;
        height: 100%;
    }
    & img{
        width: 100%;
        height: 300px;
    }
    ${media.desktop`
        & img{
            height: 380px;
        }
    `}
    ${media.mobile`
        & img{
            height: 200px;
        }
    `}
`