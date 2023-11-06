import styled, { css, DefaultTheme } from "styled-components";
import { ButtonStyleType } from "./types";

type WrapperProps = {
  $styleType: ButtonStyleType;
};

const WrapperModifier = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.yellow[500]};
    padding: 16px;
    color: ${theme.colors.white};
    font-weight: 700;

    &:hover {
      background: ${theme.colors.yellow[700]};
    }

    &:disabled {
      background: ${theme.colors.neutral[500]};
      cursor: not-allowed;
    }
  `,

  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.neutral[400]};
    color: ${theme.colors.neutral[700]};
    font-size: ${theme.font.sizes.ml};
    padding: 8px 16px;
    font-weight: 400;

    &:hover {
      background: ${theme.colors.neutral[500]};
    }
  `,

  tertiary: (theme: DefaultTheme) => css`
    background: ${theme.colors.purple[700]};
    padding: 8px;

    &:hover {
      background: ${theme.colors.purple[500]};
    }
  `,
};

export const WrapperButton = styled.button<WrapperProps>`
  ${({ theme, $styleType }) => css`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    gap: 8px;
    border: none;
    transition: 0.2s;
    text-transform: uppercase;

    ${$styleType && WrapperModifier[$styleType](theme)};
  `}
`;
