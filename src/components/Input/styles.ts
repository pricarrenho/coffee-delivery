import { css, styled } from "styled-components";

export const Input = styled.input`
  ${({ theme }) => css`
    padding: 12px;
    border-radius: 4px;
    border: 1px solid ${theme.colors.neutral[400]};
    background: ${theme.colors.neutral[300]};
  `}
`;
