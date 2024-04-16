import { Link } from "react-scroll";
import styled, { css } from "styled-components";

import { device } from "../../ui/Breakpoints";
import { NAVBAR_HEIGHT_REM } from "../../ui/ui-constants";

// used for profile picture and links in the navbar
const sharedStyledForLinks = css`
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    color: ${({ theme }) => theme.colors.dark};
    transition: ${({ theme }) => theme.transition};
    cursor: pointer;
  }
`;

export const StyledNavbarLink = styled(Link)`
  ${sharedStyledForLinks}
`;

export const NavigationPictureLink = styled(Link)`
  ${sharedStyledForLinks};
  width: 3.125rem;
  height: 3.125rem;
  &:hover {
    transform: scale(1.1);
  }
`;

export const NavbarWrapper = styled.nav`
  padding: 0 3rem;
  width: 100vw;
  height: ${NAVBAR_HEIGHT_REM}rem;
  display: flex;
  background-color: ${({ theme }) => theme.colors.primary};
  position: fixed;
  display: grid;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex["10"]};
  box-shadow: ${({ theme }) => theme.shadow.primary};
  transition: ${({ theme }) => theme.transition};
  border-bottom-right-radius: 0.6rem;
  border-bottom-left-radius: 0.6rem;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarList = styled.ul`
  display: flex;
  gap: 3.5rem;
  list-style-type: none;

  ${device.md} {
    display: none;
  }

  ${device.lg} {
    font-size: 0.9rem;
    gap: 2.5rem;
  }
`;

export const NavBarImage = styled.img`
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 50%;
  overflow: hidden;
  object-fit: fill;
`;

export const ThemeButton = styled.button`
  background-color: transparent;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  border: none;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: scale(1.1);
    transition: ${({ theme }) => theme.transition};
  }
  ${device.lg} {
    width: 1.7rem;
    height: 1.7rem;
  }
`;
