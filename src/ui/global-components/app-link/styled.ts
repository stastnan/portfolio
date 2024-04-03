import styled, { css } from "styled-components";

interface LinkProps {
  variant: "primary" | "light";
}

export const StyledLink = styled.a<LinkProps>`
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
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
        &:hover {
          background-color: transparent;
          color: ${theme.colors.dark};
          border-color: ${theme.colors.primary};
          transform: scale(1.1);
        }
      `;
    }
    if (variant === "light") {
      return css`
        background-color: ${theme.colors.light};
        color: ${theme.colors.black};
        &:hover {
          background-color: transparent;
          color: ${theme.colors.dark};
          border-color: ${theme.colors.light};
          transform: scale(1.1);
        }
      `;
    }
  }}
`;
