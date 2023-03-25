import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap-reverse;
`;

export const Title = styled.h2`
    font-weight: bold;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;
`

export const TitleHeighlight = styled.span`
    color: #E4105D;
`

export const TextContent = styled.p`
    font-weight: 400;
    font-size: 16px;
    width: 420px;
    margin-bottom: 20px;
    line-height: 22px;
`