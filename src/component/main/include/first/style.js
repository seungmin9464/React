import styled from 'styled-components'

export const Portfolio = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.textColor};
    line-height: 1.2;
    font-size: 200px;
    font-weight: 900;
    text-align: center;
    font-family: pretendard; 
    @media ${(props) => props.chanege.large}{
        font-size: 120px;
    }
`

export const PortfolioInner = styled.div`
    width: 100%;
    height: 270px;
    background-color: ${(props) => props.theme.bgColor};
    opacity: 0.95;
    position: absolute;
    filter: blur(5px);
    @media ${(props) => props.chanege.large}{
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

export const TypingText = styled.span`
    color: ${(props) => props.theme.color};
    line-height: 1.2;
    font-size: 70px;
    font-weight: 600;
    font-family: pretendard;
    text-align: center;
    @media ${(props) => props.chanege.large}{
        font-size: 50px;
    }
`