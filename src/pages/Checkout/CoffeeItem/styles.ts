import { css, styled } from "styled-components";

export const CheckoutCoffeeWrapper = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (min-width: 800px) {
      flex-direction: row;
      justify-content: space-between;
    }
  `}
`;

export const CheckoutCoffee = styled.div`
  ${() => css`
    display: flex;
    gap: 20px;
  `}
`;

export const Image = styled.img`
  ${() => css`
    width: 64px;
    height: 64px;
  `}
`;

export const CheckoutCoffeeName = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[800]};
    font-size: ${theme.font.sizes.ml};
    font-weight: 400;
    line-height: 130%;
  `}
`;

export const CheckoutCoffeeButtons = styled.div`
  ${() => css`
    display: flex;
    gap: 8px;
    margin-top: 8px;
  `}
`;

export const CheckoutCoffeeValue = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[700]};
    text-align: center;
    font-size: ${theme.font.sizes.ml};
    font-weight: 700;
    width: 95px;

    @media (min-width: 800px) {
      text-align: right;
    }
  `}
`;
