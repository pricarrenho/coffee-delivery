import { css, styled } from "styled-components";

export const Wrapper = styled.div`
  ${() => css`
    display: flex;
    height: 38px;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
  `}
`;
export const InputNumberBtn = styled.button`
  ${({ theme }) => css`
    border: none;
    cursor: pointer;
    background-color: ${theme.colors.white};
    color: ${theme.colors.purple[500]};
    outline: none;
    font-size: ${theme.font.sizes.l};
    padding: 8px 16px;
  `}
`;

export const InputNumber = styled.input`
  ${({ theme }) => css`
    border: none;
    background-color: ${theme.colors.white};
    width: 24px;
    text-align: center;
    outline: none;
    padding: 9px;
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
