import styled from "styled-components";

import { device } from "../../Breakpoints";
import { NAVBAR_HEIGHT_REM } from "../../ui-constants";

interface Props {
  bgcolor: "light" | "dark";
  block?: boolean;
}

export const StyledSection = styled.section<Props>`
  padding: 7rem 0;
  background-color: ${({ theme, bgcolor }) =>
    bgcolor === "dark" ? theme.colors.light : theme.colors.white};
  transition: ${({ theme }) => theme.transition};
  width: 100vw;
  display: ${({ block }) => (block ? "block" : "grid")};
  place-items: center;
  scroll-margin-top: 5rem;
  overflow: hidden;
  min-height: calc(100vh - ${NAVBAR_HEIGHT_REM}rem);

  ${device.lg} {
    padding: 3rem 0;
  }

  @media (orientation: landscape) and (max-height: 500px) {
    padding: 3rem 7rem 3rem 0;
  }
`;
