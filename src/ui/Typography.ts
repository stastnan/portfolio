import styled from "styled-components";

import { device } from "./breakpoints";

export const Heading1 = styled.h1`
  font-size: ${({ theme }) => theme.textSizesDesktop.h1};
  line-height: ${({ theme }) => theme.lineHeight.general};
  font-family: ${({ theme }) => theme.fonts.montserrat}, sans-serif;
  color: ${({ theme }) => theme.colors.black};

  ${device.md} {
    font-size: ${({ theme }) => theme.textSizesMobile.h1};
    line-height: ${({ theme }) => theme.lineHeight.small};
  }
`;

export const Heading2 = styled.h2`
  font-size: ${({ theme }) => theme.textSizesDesktop.h2};
  line-height: ${({ theme }) => theme.lineHeight.general};
  font-family: ${({ theme }) => theme.fonts.montserrat}, sans-serif;
  color: ${({ theme }) => theme.colors.black};

  ${device.md} {
    font-size: ${({ theme }) => theme.textSizesMobile.h2};
    line-height: ${({ theme }) => theme.lineHeight.general};
  }
`;
export const Heading3 = styled.h3`
  font-size: ${({ theme }) => theme.textSizesDesktop.h3};
  line-height: ${({ theme }) => theme.lineHeight.general};
  font-family: ${({ theme }) => theme.fonts.montserrat}, sans-serif;
  color: ${({ theme }) => theme.colors.black};

  ${device.md} {
    font-size: ${({ theme }) => theme.textSizesMobile.h3};
    line-height: ${({ theme }) => theme.lineHeight.small};
  }
`;

export const Heading4 = styled.h4`
  font-size: ${({ theme }) => theme.textSizesDesktop.h4};
  line-height: ${({ theme }) => theme.lineHeight.general};
  font-family: ${({ theme }) => theme.fonts.montserrat}, sans-serif;
  color: ${({ theme }) => theme.colors.black};

  ${device.md} {
    font-size: ${({ theme }) => theme.textSizesMobile.h4};
    line-height: ${({ theme }) => theme.lineHeight.small};
  }
`;

export const Heading5 = styled.h5`
  font-size: ${({ theme }) => theme.textSizesDesktop.h5};
  line-height: ${({ theme }) => theme.lineHeight.general};
  font-family: ${({ theme }) => theme.fonts.montserrat}, sans-serif;
  color: ${({ theme }) => theme.colors.black};

  ${device.md} {
    font-size: ${({ theme }) => theme.textSizesMobile.h5};
    line-height: ${({ theme }) => theme.lineHeight.small};
  }
`;

export const Heading6 = styled.h1`
  font-size: ${({ theme }) => theme.textSizesDesktop.h6};
  line-height: ${({ theme }) => theme.lineHeight.general};
  font-family: ${({ theme }) => theme.fonts.montserrat}, sans-serif;
  color: ${({ theme }) => theme.colors.black};

  ${device.md} {
    font-size: ${({ theme }) => theme.textSizesMobile.h6};
    line-height: ${({ theme }) => theme.lineHeight.small};
  }
`;

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.textSizesDesktop.p};
  line-height: ${({ theme }) => theme.lineHeight.general};
  font-family: ${({ theme }) => theme.fonts.montserrat}, sans-serif;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;

  ${device.md} {
    font-size: ${({ theme }) => theme.textSizesMobile.p};
  }
`;

export const Description = styled(Paragraph)`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.dark};
`;
