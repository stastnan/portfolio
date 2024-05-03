import { motion } from "framer-motion";
import styled from "styled-components";

import { device } from "../../ui/breakpoints";
import { StyledWrapper } from "../../ui/components/general-wrapper/styled";
import { NAVBAR_HEIGHT_REM } from "../../ui/constants";
import { Heading3, Paragraph } from "../../ui/typography";

export const HeaderWrapper = styled.header`
  margin-top: ${NAVBAR_HEIGHT_REM}rem;
  height: calc(100vh - (${NAVBAR_HEIGHT_REM}rem));
  display: grid;
  place-items: center;
  background: ${({ theme }) => theme.colors.white};
  transition: ${({ theme }) => theme.transition};

  ${device.md} {
    margin-top: ${NAVBAR_HEIGHT_REM}rem;
    height: calc(100vh - ${NAVBAR_HEIGHT_REM}rem);
  }

  @media (orientation: landscape) and (max-height: 500px) {
    height: 100%;
    margin-top: ${NAVBAR_HEIGHT_REM}rem;
    padding-top: 2rem;
  }
`;

export const HeaderContainer = styled(StyledWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const HeaderImage = styled.img`
  width: 18rem;
  height: 22rem;
  object-fit: cover;
  border-radius: 9rem 9rem 2rem 2rem;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow.primary};

  ${device.md} {
    max-width: 14rem;
    max-height: 17rem;
  }
`;
export const NameHeading = styled(Heading3)`
  margin-top: 1.5rem;
`;
export const MottoParagraph = styled(Paragraph)`
  max-width: 35rem;
  text-align: center;
  margin: 1rem 0.6rem 2rem 0.6rem;

  ${device.lg} {
    max-width: 25rem;
  }
`;
export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  text-align: center;

  ${device.md} {
    gap: 1rem;
    font-size: 0.8rem;
  }
`;
export const HeaderLink = styled.a`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  ${device.md} {
    margin: 0.1rem 0.1rem;
    font-size: 0.8rem;
  }
`;

export const SocialsContainer = styled.div`
  position: absolute;
  bottom: 50%;
  left: 33%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${device.md} {
    display: none;
  }

  ${device.lg} {
    left: 25%;
  }

  @media (orientation: landscape) and (max-height: 500px) {
    bottom: 10%;
  }
`;

export const ImageContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
