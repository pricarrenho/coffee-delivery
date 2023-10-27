import styled, { css } from "styled-components";

export const SelectWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.neutral[400]};
    display: flex;
    padding: 16px;
    align-items: center;
    gap: 12px;
    width: 178.667px;
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.neutral[500]};
    }
  `}
`;

export const OptionName = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[700]};
    font-size: 12px;
    font-weight: 400;
    line-height: 160%;
    text-transform: uppercase;
  `}
`;
