import styled, { DefaultTheme, css } from "styled-components";

type WrapperProps = {
  $isSelect: boolean;
};

const ModifierWrapper = (theme: DefaultTheme) => css`
  background-color: ${theme.colors.purple[300]};
  border: 1px solid ${theme.colors.purple[500]};

  &:hover {
    background-color: ${theme.colors.purple[300]};
  }
`;

export const SelectWrapper = styled.button<WrapperProps>`
  ${({ theme, $isSelect }) => css`
    background-color: ${theme.colors.neutral[400]};
    display: flex;
    padding: 16px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    width: 178.667px;
    border: none;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.neutral[500]};
    }

    ${$isSelect && ModifierWrapper(theme)}
  `}
`;

export const OptionName = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[700]};
    font-size: ${theme.font.sizes.ms};
    font-weight: 400;
    line-height: 160%;
    text-transform: uppercase;
  `}
`;
