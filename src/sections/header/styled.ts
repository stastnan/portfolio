import styled from "styled-components";

import { device } from "../../ui/Breakpoints";
import { Heading3, Paragraph } from "../../ui/Typography";
import { StyledWrapper } from "../../ui/global-components/general-wrapper/styled";
import { NAVBAR_HEIGHT } from "../../ui/ui-constants";

export const HeaderWrapper = styled.header`
  margin-top: calc(${NAVBAR_HEIGHT}rem + 2rem);
  height: calc(100vh - (${NAVBAR_HEIGHT}rem + 2rem));
  display: grid;
  place-items: center;
  background: ${({ theme }) => theme.colors.white};
  transition: ${({ theme }) => theme.transition};
  padding-bottom: 2rem;
  scroll-margin-top: calc(${NAVBAR_HEIGHT}rem + 2rem);

  ${device.md} {
    margin-top: calc(${NAVBAR_HEIGHT}rem);
    height: calc(100vh - ${NAVBAR_HEIGHT}rem);
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
    left: 26%;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
