import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Open Sans";
}

body{
    max-width: 100vw;
    background-color: #1E192C;
    color: #fff;
}

button{
    border: none;
    cursor: pointer;
}

a{
    cursor: pointer;
}
`