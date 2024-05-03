import { Link } from "react-scroll";
import styled from "styled-components";

import { device } from "../../ui/breakpoints";
import { NAVBAR_HEIGHT_REM } from "../../ui/constants";

export const Wrapper = styled.nav`
  height: auto;
  width: 100%;
  display: none;
  place-items: center;
  position: fixed;
  bottom: 3rem;

  z-index: ${({ theme }) => theme.zIndex[5]};

  ${device.md} {
    display: grid;
    bottom: 2.5rem;
  }
  @media (orientation: landscape) and (max-height: 500px) {
    position: fixed;
    right: -17rem;
    bottom: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: ${NAVBAR_HEIGHT_REM}rem;
  }
`;

export const NavigationLink = styled(Link)`
  color: white;

  &.active {
    color: black;
  }
`;

export const IconLink = styled.span`
  font-size: 1.4rem;
  display: grid;
  place-items: center;

  &:hover {
    color: ${({ theme }) => theme.colors.black};
    cursor: pointer;
    transition: ${({ theme }) => theme.transition};
  }

  ${device.sm} {
    font-size: 1.2rem;
  }

  @media (orientation: landscape) and (max-height: 500px) {
    font-size: 1rem;
  }
`;

export const ListWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;

  border-radius: ${({ theme }) => theme.borderRadius.borderRadius1};
  padding: 0.5rem 1rem;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(20px);

  @media (orientation: landscape) and (max-height: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const LinkWrapper = styled.div`
  display: ${(active) => (active ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0.2rem;
  width: 2.5rem;
  height: 2.5rem;

  ${device.sm} {
    width: 2rem;
    height: 2rem;
  }

  @media (orientation: landscape) and (max-height: 500px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
