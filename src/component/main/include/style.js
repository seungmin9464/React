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
    opacity: .5;
    z-index: 999;
    @media ${(props) => props.theme.mobile}{
        opacity: 1;
    }
`

export const Logo = styled.div`
    display: flex;
    width: 120px;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: #fff;
    @media ${(props) => props.theme.mobile}{
        width: auto;
    }
`

export const MenuList = styled.ul`
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    transition: ease 1s;
    @media ${(props) => props.theme.mobile}{
        display: none;
        left: 0;
        &.active{
            position: fixed;
            display: flex;
            top: 0px;
            width: 100%;
            height: 100%;
            right: 100%;
            background-color: #000;
            flex-direction: column;
            z-index: -10;
            opacity: .7;
            & a{
                height: 100px;
                width: 100%;
                &:nth-child(1){
                    padding-top: 80px;
                }
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
    color: #fff;
`
