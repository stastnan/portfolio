import { css } from "styled-components";

import { device } from "@ui/breakpoints";

export const sharedStyles = css<{ variant: "primary" | "light" }>`
  display: inline-block;
  width: fit-content;
  align-items: center;
  text-align: center;
  gap: 1rem;
  border: 2px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius2};
  cursor: pointer;
  padding: 0.6rem 1.5rem;
  transition: ${({ theme }) => theme.transition};
  box-shadow: ${({ theme }) => theme.shadow.primary};
  background-color: ${({ theme, variant }) =>
    variant === "primary" ? theme.colors.primary : theme.colors.light};
  color: ${({ theme, variant }) =>
    variant === "primary" ? theme.colors.white : theme.colors.black};

  &:hover {
    background-color: transparent;
    color: ${({ theme, variant }) =>
      variant === "primary" ? theme.colors.primary : theme.colors.dark};
    border-color: ${({ theme, variant }) =>
      variant === "primary" ? theme.colors.primary : theme.colors.light};
    transform: scale(1.1);
  }

  ${device.sm} {
    padding: 0.4rem 1.2rem;
  }
`;
