import styled from "styled-components";

export const RankUserContainer = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 24px;
`

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 100%;
    border: 3px solid #fff;
    margin-right: 12px;
`

export const NameText = styled.div`
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
`
export const Progress = styled.div`
    width: 100%;
    min-width: 137px;
    height: 6px;
    background: #ffff;
    border-radius: 3px;
    position: relative;

    margin-top: 2px;

    &::after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: ${({percentual})=>percentual}%;
        height: 6px;
        border-radius: 3px;
        background-color: #23DD7A;
    }
`
