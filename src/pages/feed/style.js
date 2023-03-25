import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 80%;
  margin: 40px auto 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap-reverse;
  gap: 40px;
`;

export const Title = styled.h3`
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 24px;
`

export const TitleHeighlight = styled.h3`
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 24px;
    color: #ffffff70;
`

export const Column = styled.div`
    flex: ${({flex})=> flex};
`