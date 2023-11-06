import { DefaultTheme, css, styled } from "styled-components";
import { IconBackground } from "./types";

export const SuccessWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 24px 0px;

  @media (min-width: 800px) {
    padding: 48px 0px;
  }
`;

export const TitleWrapper = styled.div``;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.yellow[700]};
    font-size: ${theme.font.sizes.xl};
    font-weight: 800;

    @media (min-width: 800px) {
      font-size: ${theme.font.sizes.xxl};
    }
  `}
`;

export const Subtitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[800]};
    font-size: ${theme.font.sizes.ml};
    font-weight: 400;

    @media (min-width: 800px) {
      font-size: ${theme.font.sizes.l};
    }
  `}
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const LeftContentWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 40px;
    border-radius: 6px 36px;
    border: 1px solid ${theme.colors.yellow[500]};

    @media (min-width: 800px) {
      width: 526px;
    }
  `}
`;

export const LeftContent = styled.div`
  ${() => css`
    display: flex;
    gap: 12px;
  `}
`;

type IconProps = {
  $styleType: IconBackground;
};

const IconModifierBackground = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.purple[500]};
  `,

  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.yellow[500]};
  `,

  tertiary: (theme: DefaultTheme) => css`
    background: ${theme.colors.yellow[700]};
  `,
};

export const Icon = styled.div<IconProps>`
  ${({ theme, $styleType }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    border-radius: 50%;
    width: 32px;
    height: 32px;

    ${$styleType && IconModifierBackground[$styleType](theme)}
  `}
`;

export const LeftContentDescription = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.ml};
    font-weight: 400;
    line-height: 130%;
    color: ${theme.colors.neutral[700]};

    span {
      font-weight: 700;
    }
  `}
`;

export const Image = styled.img`
  width: 350px;
  height: 250px;

  @media (min-width: 800px) {
    width: 492px;
    height: 293px;
  }
`;
