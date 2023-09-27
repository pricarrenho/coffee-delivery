import { css, styled } from "styled-components";

export const Wrapper = styled.main`
  ${() => css`
    display: flex;
    align-items: center;
    gap: 56px;
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
  ${() => css``}
`;

export const Subtitle = styled.p`
  ${() => css``}
`;

export const ServicesContentContainer = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 66px;
  `}
`;

export const ServicesContent = styled.div`
  ${() => css`
    display: flex;
    gap: 40px;
  `}
`;

export const ServiceDescription = styled.p`
  ${() => css``}
`;

export const ServiceContent = styled.div`
  ${() => css`
    display: flex;
    gap: 8px;
  `}
`;

export const RightContent = styled.div`
  ${() => css``}
`;

export const Image = styled.img`
  ${() => css``}
`;
