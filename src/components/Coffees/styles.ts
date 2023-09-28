import { css, styled } from "styled-components";

export const Wrapper = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    padding: 32px 0px;
    gap: 54px;
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
      display: flex;
      gap: 32px;
    `}
`;

export const Coffee = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    margin-bottom: 80px; //TODO arrumar
  `}
`;

export const CoffeeFirstContent = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
  `}
`;

export const CoffeeSecondContent = styled.div`
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
  `}
`;

export const Tag = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: 4px 8px;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.yellow[300]};
    border-radius: 100px;

    p {
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

    span {
      font-family: Baloo 2;
      font-size: 24px;
      font-weight: 800;
    }
  `}
`;
