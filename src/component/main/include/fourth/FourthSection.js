import styled from 'styled-components';
import SliderDiv from './Slider';
import { media } from '../../../../style/media_query';

const FourthSection = () => {
    return (
        <ContentsWrap name='CONTENTS'>
            <SliderDiv/>
        </ContentsWrap>
    );
};

export default FourthSection;

const ContentsWrap = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0px 30px;
    box-sizing: border-box;
    flex-direction: column;
    ${media.pc`
        height: 60vh;
        margin-bottom: 100px;
    `}
    ${media.desktop`
        padding: 0px 30px;
    `}
    ${media.mobile`
        padding: 20px 0px;
    `}
`