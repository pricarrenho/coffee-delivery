import { css, styled } from "styled-components";

export const CheckoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  padding: 24px 0px;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    padding: 48px 0px;
  }
`;

export const LeftContent = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 14px;
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: 18px;
    font-weight: 700;
    color: ${theme.colors.neutral[800]};
  `}
`;

export const AddressAndPaymentWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: 40px;
    flex-direction: column;
    gap: 32px;
    border-radius: 6px;
    background: ${theme.colors.neutral[200]};
  `}
`;

export const AddressAndPaymentContent = styled.div`
  ${() => css`
    display: flex;
    align-items: start;
    gap: 8px;
  `}
`;

export const AddressAndPaymentTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[800]};
    font-size: 16px;
    font-weight: 400;
    line-height: 130%;
  `}
`;

export const AddressAndPaymentDescription = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[700]};
    font-size: 14px;
    font-weight: 400;
    line-height: 130%;
  `}
`;

export const ContentForm = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media (min-width: 800px) {
      flex-direction: row;
    }
  `}
`;

export const OptionsPayment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

export const RightContent = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 14px;
  `}
`;

export const CoffeeWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: 40px;
    gap: 48px;
    border-radius: 6px;
    background: ${theme.colors.neutral[200]};
  `}
`;

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
    font-size: 16px;
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
    text-align: left;
    font-size: 16px;
    font-weight: 700;

    @media (min-width: 800px) {
      text-align: right;
    }
  `}
`;

export const CheckoutValueWrapper = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 12px;
  `}
`;

export const CheckoutValueContent = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
  `}
`;

export const CheckoutValueName = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[700]};
    text-align: left;
    font-size: 14px;
    font-weight: 400;

    @media (min-width: 800px) {
      text-align: right;
    }
  `}
`;

export const CheckoutValueTotal = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[800]};
    text-align: left;
    font-size: 20px;
    font-weight: 700;

    @media (min-width: 800px) {
      text-align: right;
    }
  `}
`;
