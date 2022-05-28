import styled from 'styled-components';
import {media} from '../../../../../../style/media_query'

const MainImage = (props) => {
  return (
      <>
        <BgWrap style={{
            background: `url('${props.image}'), #1c1c1c`,
                    backgroundSize: '100%, cover',
                    position: 'relative'
                }}>
            <div>
                <div style={{ position: 'absolute', maxWidth: '500px', bottom: '2rem', marginLeft: '2rem' }}>
                    <H2 style={{ color: 'white' }}> {props.title} </H2>
                </div>
            </div>
        </BgWrap>
      </>
  )
}

export default MainImage;

const BgWrap = styled.div`
    height: 600px;
    background-position: top center;
    background-repeat: no-repeat;
    width: '100%';
    overflow: hidden;
    ${media.desktop`
        height: 400px;
        background-position: top right;
        background-size: cover;
    `}
    ${media.medium`
        height: 250px;
        background-position: center;
    `}
    ${media.mobile`
        height: 200px;
    `}
`

const H2 = styled.h2`
    font-size: 30px;
    font-weight: 900;
    margin: 50px;
    ${media.tablet`
        font-size: 20px;
        margin: 20px;
    `}
    ${media.mobile`
        margin: 0;
    `}
`