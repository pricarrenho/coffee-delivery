import { DefaultTheme, css, styled } from "styled-components";
import { IconContainerType } from "./types";

export const Wrapper = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    gap: 48px;
    padding: 94px 0px;
  `}
`;

export const LeftContent = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 66px;
  `}
`;

export const TitleContent = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[900]};
    font-family: "Baloo 2";
    font-size: 48px;
    font-style: normal;
    font-weight: 800;
  `}
`;

export const Subtitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[800]};
    font-size: 20px;
  `}
`;

export const ServicesContentContainer = styled.div`
  ${() => css`
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 36px;
    row-gap: 20px;
  `}
`;

export const ServiceContent = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    gap: 12px;
  `}
`;

const IconModifier = {
  yellowDark: (theme: DefaultTheme) => css`
    background: ${theme.colors.yellow[500]};
  `,

  yellow: (theme: DefaultTheme) => css`
    background: ${theme.colors.yellow[700]};
  `,

  gray: (theme: DefaultTheme) => css`
    background: ${theme.colors.neutral[700]};
  `,

  purple: (theme: DefaultTheme) => css`
    background: ${theme.colors.purple[500]};
  `,
};

type IconProps = {
  $styleType: IconContainerType;
};

export const IconContainer = styled.div<IconProps>`
  ${({ theme, $styleType }) => css`
    display: flex;
    align-items: center;
    padding: 8px;
    border-radius: 100%;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    ${$styleType && IconModifier[$styleType](theme)};
  `}
`;

export const ServiceDescription = styled.p`
  ${({ theme }) => css`
    font-size: 16px;
    color: ${theme.colors.neutral[700]};
  `}
`;

export const Image = styled.img`
  ${() => css``}
`;
