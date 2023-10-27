import { css, styled } from "styled-components";

export const Product = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    border-radius: 6px 36px;
    background-color: ${theme.colors.neutral[200]};
    padding: 20px;
  `}
`;

export const ProductFirstContent = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
  `}
`;

export const ProductSecondContent = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
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
      background: ${theme.colors.yellow[300]};
      border-radius: 100px;
      color: ${theme.colors.yellow[700]};
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
    }
  `}
`;

export const Subtitle = styled.h3`
  ${({ theme }) =>
    css`
      font-size: 20px;
      color: ${theme.colors.neutral[800]};
    `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    text-align: center;
    font-size: 14px;
    color: ${theme.colors.neutral[600]};
  `}
`;

export const Value = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[700]};
    font-size: 14px;
    width: 111px;

    span {
      font-family: Baloo 2;
      font-size: 24px;
      font-weight: 800;
    }
  `}
`;
