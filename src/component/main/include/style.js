import styled from 'styled-components'

export const HeaderDiv = styled.div`
    position: fixed;
    width: 100%;
    height: 80px;
    box-sizing: border-box;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 999;
    opacity: .8;
`

export const Logo = styled.div`
    display: flex;
    width: 120px;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.color};
    font-family: pretendard; 
`

export const MenuList = styled.ul`
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
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
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0 30px;
    color: ${(props) => props.theme.color};
    font-family: pretendard; 
`

export const Icon = styled.i`
    cursor: pointer;
    width: 20px;
    height: 20px;
    transition: ease 2s;
`