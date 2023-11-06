import { css, styled } from "styled-components";

export const Wrapper = styled.button`
  ${({ theme }) => css`
    display: inline-flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    background: ${theme.colors.yellow[300]};

    position: relative;
  `}
`;

export const ItensWrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    right: -8.345px;
    top: -8px;
    display: flex;
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;
    border-radius: 1000px;
    background: ${theme.colors.yellow[700]};
    color: ${theme.colors.white};
  `}
`;

export const ItensNumber = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.ml};
    font-weight: 700;
  `}
`;
