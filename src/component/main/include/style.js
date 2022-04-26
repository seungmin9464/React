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
    z-index: 99;
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
    @media ${(props) => props.theme.mobile}{
        display: none;   
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
