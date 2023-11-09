import { css, styled } from "styled-components";

export const Product = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    border-radius: 6px 36px;
    background-color: ${theme.colors.neutral[300]};
    padding: 20px;
  `}
`;

export const ProductFirstContentWrapper = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
  `}
`;

export const ProductFirstContent = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
  `}
`;

export const ProductSecondContent = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  `}
`;

export const Image = styled.img`
  ${() => css`
    width: 120px;
    height: 120px;
    margin-top: -40px;
  `}
`;

export const Tag = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;

    p {
      padding: 8px 16px;
      background: ${theme.colors.purple[700]};
      border-radius: 100px;
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.ml};
      font-weight: 700;
      text-transform: uppercase;
    }
  `}
`;

export const Subtitle = styled.h3`
  ${({ theme }) =>
    css`
      font-size: ${theme.font.sizes.l};
      color: ${theme.colors.neutral[800]};
    `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.ml};
    color: ${theme.colors.neutral[700]};
  `}
`;

export const Value = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[700]};
    font-size: ${theme.font.sizes.ml};
    width: 116px;

    span {
      font-size: ${theme.font.sizes.l};
      font-weight: 800;
    }
  `}
`;
