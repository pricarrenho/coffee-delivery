import { css, styled } from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    padding: 12px;
    border-radius: 4px;
    border: 1px solid ${theme.colors.neutral[400]};
    background: ${theme.colors.neutral[300]};
    font-size: ${theme.font.sizes.ml};

    &:focus {
      outline-color: ${theme.colors.yellow[700]};
    }
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[700]};
    font-size: ${theme.font.sizes.ml};
  `}
`;
