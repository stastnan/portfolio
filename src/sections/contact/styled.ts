import { TypeAnimation } from "react-type-animation";
import styled from "styled-components";

import { CustomWrapper } from "@ui/components/custom-wrapper/styled";

import { device } from "../../ui/breakpoints";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  ${device.md} {
    gap: 1.5rem;
  }
`;

export const ContentWrapper = styled(CustomWrapper)`
  gap: 0;
`;

export const AnimationWrapper = styled(Wrapper)`
  flex-direction: column;
  text-align: center;
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.5rem;
  aspect-ratio: 1/1;
  color: white;
  background: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  border: 2px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius2};
  transition: ${({ theme }) => theme.transition};
  box-shadow: ${({ theme }) => theme.shadow.primary};
  &:hover {
    background: transparent;
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    transform: scale(1.1);
  }

  ${device.sm} {
    width: 4rem;
  }
`;

export const Animation = styled(TypeAnimation)`
  font-size: 1.1rem;
  line-height: ${({ theme }) => theme.lineHeight.general};
  font-family: ${({ theme }) => theme.fonts.montserrat}, sans-serif;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  white-space: pre-line;
  min-height: 6rem;

  ${device.md} {
    font-size: 0.9rem;
    min-height: 7.5rem;
  }

  ${device.sm} {
    min-height: 9.2rem;
  }
`;

export const ContactImage = styled.img`
  max-width: 30%;
  max-height: 30%;
  transition: ${({ theme }) => theme.transition};

  ${device.md} {
    max-width: 75%;
    max-height: 75%;
  }

  ${device.sm} {
    max-width: 95%;
    max-height: 95%;
  }
`;
