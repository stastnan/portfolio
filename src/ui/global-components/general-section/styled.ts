import { device } from "../../Breakpoints";

import styled from "styled-components";

interface Props {
  bgcolor: "light" | "dark";
}

export const StyledSection = styled.section<Props>`
  padding: 10rem 0;
  background-color: ${({ theme, bgcolor }) =>
    bgcolor === "dark" ? theme.colors.light : theme.colors.white};
  transition: ${({ theme }) => theme.transition};
  width: 100%;
  display: grid;
  place-items: center;

  ${device.md} {
    padding: 8rem O;
  }
`;
