import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      box-sizing: border-box;
    }

    html,
    body,
    #__next {
      background: ${theme.colors.background};
      font-family: ${theme.font.family};
    }

    body,
    h1,
    h2,
    h3,
    p {
      margin: 0;
      padding: 0;
      line-height: 130%;
    }
  `}
`;
