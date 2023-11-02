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
    font-size: ${theme.font.sizes.xl};
    font-weight: 800;

    @media (min-width: 800px) {
      font-size: ${theme.font.sizes.xxl};
    }
  `}
`;

export const Content = styled.div`
  ${() => css`
    display: grid;
    grid-template-columns: 1fr;
    gap: 48px;

    @media (min-width: 800px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;
    }
  `}
`;
