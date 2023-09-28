import styled, { css, DefaultTheme } from "styled-components";
import { ButtonStyleType } from "./types";

type WrapperProps = {
  $styleType: ButtonStyleType;
};

const WrapperModifier = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.yellow[500]};

    &:hover {
      background: ${theme.colors.yellow[700]};
    }
  `,

  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.yellow[500]};

    &:hover {
      background: ${theme.colors.yellow[700]};
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

    ${$styleType && WrapperModifier[$styleType](theme)};
  `}
`;
