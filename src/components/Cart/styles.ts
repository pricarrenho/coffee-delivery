import { Link } from "react-router-dom";
import { css, styled } from "styled-components";

export const Wrapper = styled(Link)`
  ${({ theme }) => css`
    display: inline-flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    background: ${theme.colors.yellow[300]};
  `}
`;
