import styled, { css } from "styled-components";

interface Props {
  variant: "primary" | "light";
}
export const StyledLink = styled.a<Props>`
  display: inline-block;
  width: fit-content;
  align-items: center;
  gap: 1rem;
  border: 2px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius2};
  cursor: pointer;
  padding: 0.6rem 1.5rem;
  transition: ${({ theme }) => theme.transition};
  box-shadow: ${({ theme }) => theme.shadow.primary};

  ${({ variant, theme }) => {
    if (variant === "primary") {
      return css`
        background-color: ${theme.buttonVariants.primary.backgroundColor};
        color: ${theme.buttonVariants.primary.color};
      `;
    }
    if (variant === "light") {
      return css`
        background-color: ${theme.buttonVariants.light.backgroundColor};
        color: ${theme.buttonVariants.light.color};
      `;
    }
  }}

  &:hover {
    background-color: transparent;
    transform: scale(1.1);
    ${({ variant, theme }) => {
      if (variant === "primary") {
        return css`
          color: ${theme.buttonVariants.primary.hoverColor};
          border-color: ${theme.buttonVariants.primary.hoverBorder};
        `;
      }
      if (variant === "light") {
        return css`
          color: ${theme.buttonVariants.light.hoverColor};
          border-color: ${theme.buttonVariants.light.hoverBorder};
        `;
      }
    }};
  }
`;
