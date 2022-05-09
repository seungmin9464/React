import styled from 'styled-components'

export const HeaderDiv = styled.div`
    position: fixed;
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 999;
    opacity: .7;
    background-color: ${(props) => props.theme.bgColor};
    border-bottom: 1px solid ${(props) => props.theme.textColor};
`

export const Logo = styled.div`
    display: flex;
    width: 120px;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.color};
    font-family: pretendard;
    cursor: pointer;
    @media ${(props) => props.chanege.mobile}{
        width: auto;
    }
`

export const Hamburger = styled.div`
    display: none;
    cursor: pointer;
    margin-left: 20px;
    & svg{
        color: ${(props) => props.theme.oppBg};
    }
    @media ${(props) => props.chanege.mobile}{
        display: block;
    }
`

export const MenuList = styled.ul`
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    & a{
        &.active{
            li{
                transition: ease .3s;
                font-weight: 600;
            }
        }
    }
    @media ${(props) => props.chanege.mobile}{
        display: none;
        left: 100%;
        transition: ease .3s;
        position: fixed;
        display: flex;
        top: 0px;
        width: 100%;
        height: 100%;
        background-color: ${(props) => props.theme.leftMenu};
        flex-direction: column;
        z-index: -10;
        opacity: .7;
        cursor: pointer;
        &.active{
            position: fixed;
            display: flex;
            top: 0;
            width: 100%;
            height: 100%;
            left: 0%;
            background-color: ${(props) => props.theme.leftMenu};
            flex-direction: column;
            z-index: -10;
            opacity: .85;
            left: 0%;
        }
        & a{
            height: 100px;
            width: 100%;
            background-color: ${(props) => props.theme.leftMenu};
            &:nth-child(1){
                padding-top: 80px;
            }
        }
    }
`

export const MenuItem = styled.li`
    height: 100%;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: ease .3s;
    font-family: pretendard;
    color: ${(props) => props.theme.color};
    @media ${(props) => props.chanege.xl}{
        padding: 0 20px;
    }
    @media ${(props) => props.chanege.medium}{
        padding: 0 10px;
    }
`

export const Icon = styled.i`
    cursor: pointer;
    font-size: 20px;
    width: 25px;
    height: 25px;
    font-size: 20px;
    transition: ease 2s;
    display: flex;
    justify-content: center;
    align-items: center;
`