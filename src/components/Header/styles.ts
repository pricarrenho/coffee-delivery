import { css, styled } from "styled-components";

export const Wrapper = styled.header`
  ${() => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px 0px;
  `}
`;

export const Image = styled.img`
  ${() => css``}
`;

export const RightContent = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    gap: 12px;
  `}
`;
