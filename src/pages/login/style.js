import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 32px;
  max-width: 565px;
  width: 100%;
  margin-bottom: 20px;
  line-height: 44px;
`;

export const TextContent = styled.p`
  font-weight: 400;
  font-size: 16px;
  width: 420px;
  margin-bottom: 35px;
  line-height: 22px;

  ${({ type }) =>
    type === "esqueci"
      ? css`
          font-size: 14px;
          font-weight: 700;
          line-height: 19px;
          color: #e5e844;
          width: fit-content;
        `
      : type === "criar" &&
        css`
          font-size: 14px;
          font-weight: 700;
          line-height: 19px;
          color: #e23dd7;
          width: fit-content;
        `}
`;

export const Wrapper = styled.div`
  max-width: 300px;
  margin: auto;
`;
export const Collumn = styled.div`
  display: flex;
  flex: 1;
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px auto 0;
`;
