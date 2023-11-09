import { css, styled } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 38px;
    padding: 2px 16px;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.neutral[400]};
    border-radius: 6px;
  `}
`;
export const InputNumberBtn = styled.button`
  ${({ theme }) => css`
    border: none;
    cursor: pointer;
    background-color: ${theme.colors.neutral[400]};
    color: ${theme.colors.purple[500]};
    outline: none;
    font-size: ${theme.font.sizes.l};
    padding: 8px;
  `}
`;

export const InputNumber = styled.input`
  ${({ theme }) => css`
    border: none;
    background-color: ${theme.colors.neutral[400]};
    width: 24px;
    text-align: center;
    outline: none;
    padding: 8px;
    font-size: ${theme.font.sizes.lm};

    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  `}
`;
