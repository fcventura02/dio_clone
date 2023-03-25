import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 80%;
    height: 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`

export const Row = styled.div`
    display: flex;
    align-items: center;
    gap: 17px;
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Wrapper = styled.header`
    background-color: #151515;
    width: 100%;
    height: 53px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SearchInputContainer = styled.div`
    width: 275px;
    height: 30px;
    background: #2D2D37;
    border-radius: 8px;
    border: 1px solid;
    border-color: transparent;
    padding: 2px 5px;
    margin: 0 12px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:focus-within{
        border-color: #E4105D ; 
    }
`

export const Menu = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 18px;
    line-height: 25px;
    color: #fff;
    margin-right: 12px;
    text-decoration: none;
`
export const MenuRight = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 18px;
    line-height: 25px;
    color: #fff;
    margin-right: 12px;
    text-decoration: none;
`
export const UserPicture = styled.img`
    width: 41px;
    height: 41px;
    border-radius: 100%;
    border: 2px solid #fff;
`

export const Input = styled.input`
    background: transparent;
    font-size: 18px;
    flex: 1;
    border: 0;
    color: #fff;
    outline: none;
`

export const Hidden = styled.div`
    display: none;
`