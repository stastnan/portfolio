import styled from "styled-components";

import { device } from "../../Breakpoints";

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

  ${device.md} {
    padding: 3rem 0;
  }
`;
