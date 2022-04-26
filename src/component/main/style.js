import styled from 'styled-components'

export const Section = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;
`

export const Portfolio = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: #707070;
    line-height: 1.2;
    font-size: 200px;
    font-weight: 900;
    text-align: center;
    font-family: pretendard; 
    @media ${(props) => props.theme.large}{
        font-size: 120px;
    }
`

export const PortfolioInner = styled.div`
    width: 100%;
    height: 270px;
    background-color: #1a1a1a;
    position: absolute;
    filter: blur(5px);
    @media ${(props) => props.theme.large}{
        height: 170px;
    }
`

export const Typing = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
`

export const TypingText = styled.p`
    color: #fff;
    line-height: 1.2;
    font-size: 70px;
    font-weight: 600;
    font-family: pretendard;
    text-align: center;
    @media ${(props) => props.theme.large}{
        font-size: 50px;
    }
`