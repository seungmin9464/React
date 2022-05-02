import styled from 'styled-components'

export const SectionInner = styled.div`
    padding: 0 30px;
    height: 100%;
    display: flex;
    @media ${(props) => props.theme.xl}{
        flex-direction: column;
    }
`

export const LeftDiv = styled.div`
    width: 30%;
    left: 0;
    padding-top: 50px;
    @media ${(props) => props.theme.xl}{
        width: 100%;
    }
    @media ${(props) => props.theme.mobile}{
        padding-top: 20px;
    }
`

export const H1 = styled.h1`
    font-family: pretendard;
    font-weight: 500;
    color: #707070;
    &.visi-h{
        visibility: hidden;
    }
`

export const Profile = styled.div`
    width: 250px;
    height: 250px;
    margin: 20px auto;
    border-radius: 50%;
    background-color: #ddd;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;
    vertical-align: top;
    & img{
        width: 325px;
        margin-top: -20px;
    }
    @media ${(props) => props.theme.xl}{
       width: 350px;
       height: 350px;
       & img{
           margin-top: 0px;
       }
    }
    @media ${(props) => props.theme.mobile}{
        width: 250px;
        height: 250px;
    }
`

export const ProfileArea = styled.div`
    height: auto;
    padding: 0 30px;
    word-break: keep-all;
    & p{
        font-family: pretendard;
        font-weight: 400;
        font-size: 20px;
        color: #fff;
        margin-top: 15px;
        &:last-of-type{
            margin-bottom: 30px;
        }
        @media ${(props) => props.theme.xxxl}{
            margin-top: 5px;
            line-height: 1.7;
        }
        @media ${(props) => props.theme.xxl}{
            display: inline;
            &:nth-child(1){
                display: block;
            }
        }
        @media ${(props) => props.theme.xl}{
            display: inline-block;
        }
        @media ${(props) => props.theme.mobile}{
            font-size: 14px;
            &:last-of-type {
                margin-bottom: 20px;
            }
        }
    }
    @media ${(props) => props.theme.xxl}{
        margin-bottom: 50px;
    }
    @media ${(props) => props.theme.xl}{
        padding: 0 50px;
        text-align: center;
        margin-bottom: 0px;
    }
    @media ${(props) => props.theme.mobile}{
        padding: 0 20px;
    }
`

export const Programers = styled.a`
    text-decoration: none;
    font-family: pretendard;
    font-weight: 400;
    font-size: 20px;
    color: #fff;
    padding: 10px 30px;
    border: 1px solid #fff;
    margin-left: 30px;
    transition: ease .3s;
    box-sizing: border-box;
    &:hover{
        background-color: #fff;
        color: #333;
    }
    @media ${(props) => props.theme.xl}{
        width: 100%;
        margin: 0;
        display: inline-flex;
        justify-content: center;
        border: none;
        &:hover{
            background-color: inherit;
            color: inherit;
        }
        & span{
            border: 1px solid #fff;
            padding: 15px 35px;
            &:hover{
                background-color: #fff;
                color: #333;
            }
            @media ${(props) => props.theme.mobile}{
                font-size: 14px;
                width: 60%;
                text-align: center;
            }
        }
    }

`

export const RightDiv = styled.div`
    width: 70%;
    right: 0;
    padding-left: 30px;
    padding-top: 50px;
    @media ${(props) => props.theme.xl}{
        width: 100%;
        padding-left: 0px;
    }
    @media ${(props) => props.theme.mobile}{
        padding-top: 20px;
    }
`

export const SkillWrap = styled.ul`
    width: 100%;
    padding: 0 10px;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: calc(100% - 80px);
    @media ${(props) => props.theme.xl}{
        justify-content: space-between;
        margin-bottom: 15px;
    }
    @media ${(props) => props.theme.large}{
        padding: 0;
    }
`

export const SkillList = styled.li`
    flex: 0 1 32%;
    margin: 15px 0;
    box-sizing: border-box;
    width: 100%;
    background-color: #333;
    border-radius: 20px;
    display: flex;
    @media ${(props) => props.theme.large}{
        flex: 0 1 49%;
        margin: 10px 0px;
    }
    @media ${(props) => props.theme.xl}{
        flex: 0 1 48%;
        margin: 5px 0px;
    }
`

export const SkillInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    & div{
        width: 150px;
        height: 150px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    & img{
        width: 100px;
    }
    & p{
        font-family: pretendard;
        font-weight: 600;
        font-size: 20px;
        color: #707070;
        margin-top: 20px;
    }
    @media ${(props) => props.theme.xl}{
        margin: 20px 0;
        & div{
            width: 120px;
            height: 120px;
        }
        & img{
             width: 60px;
        }
        & p{
            margin-top: 15px;
            font-size: 20px;
        }
    }
    @media ${(props) => props.theme.large}{
        & p{
            font-size: 20px;
        }
    }
    @media ${(props) => props.theme.mobile}{
        margin: 15px 0;
        & div{
            width: 100px;
            height: 100px;
        }
        & img{
             width: 40px;
        }
        & p{
            font-size: 14px;
            margin-top: 10px;
        }
    }
`