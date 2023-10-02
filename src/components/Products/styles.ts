import { css, styled } from "styled-components";

export const Wrapper = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    padding: 32px 0px;
    gap: 54px;
    margin-bottom: 54px;
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[800]};
    font-family: "Baloo 2";
    font-size: 32px;
    font-weight: 800;
  `}
`;

export const Content = styled.div`
  ${() =>
    css`
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 32px;
    `}
`;
