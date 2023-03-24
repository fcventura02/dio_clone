import styled, {css} from "styled-components";

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 22px;
    position: relative;
    font-size: 16px;
    color: #fff;
    padding: 2px 12px;
    min-width: 120px;
    width: calc(100% - 10px);
    height: calc(100% - 10px);

    ${({variant})=> variant !== 'primary' && css`
        width: fit-content;
        min-width: 167px;
        padding: 0.6rem 1.5rem;

        font-weight: 700;
        text-transform: uppercase;

        background: #E4105D;
        transition: box-shadow .15s ease-in;

        &:hover{
            box-shadow: #E4105D 0px 0px 48px 0px;
        }

        &::after{
            content: '';
            position: absolute;
            border: 1px solid #e4105d;
            top: -5.7px ;
            left: -5px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}
`