import styled, { css, DefaultTheme } from "styled-components";
import { ButtonStyleType } from "./types";

type WrapperProps = {
  $styleType: ButtonStyleType;
};

const WrapperModifier = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.yellow[500]};
    padding: 12px 8px;
    color: ${theme.colors.white};
    font-weight: 700;

    &:hover {
      background: ${theme.colors.yellow[700]};
    }
  `,

  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.neutral[400]};
    color: ${theme.colors.neutral[700]};
    font-size: 12px;
    font-weight: 400;

    &:hover {
      background: ${theme.colors.neutral[500]};
    }
  `,

  tertiary: (theme: DefaultTheme) => css`
    background: ${theme.colors.purple[700]};

    &:hover {
      background: ${theme.colors.purple[500]};
    }
  `,
};

export const WrapperButton = styled.button<WrapperProps>`
  ${({ theme, $styleType }) => css`
    cursor: pointer;
    display: inline-flex;
    padding: 8px;
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
