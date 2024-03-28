import styled from "styled-components";

import { device } from "../../Breakpoints";

interface Props {
  header?: boolean | string;
}

export const SocialsLink = styled.a<Props>`
  width: 1.8rem;
  aspect-ratio: 1/1;
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.black};
  display: grid;
  place-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius3};
  &:hover {
    cursor: pointer;
    background-color: ${({ theme, header }) =>
      header ? theme.colors.primary : theme.colors.light};
    color: ${({ theme, header }) =>
      header ? theme.colors.white : theme.colors.primary};

    transform: ${({ header }) =>
      header ? "translateX(-0.3rem)" : "scale(1.3)"};
  }
  ${device.md} {
    display: ${({ header }) => (header ? "none" : "grid")};
    font-size: 1rem;
  }
`;
