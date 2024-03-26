import { device } from "../../ui/Breakpoints";

import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  ${device.md} {
    gap: 1.5rem;
  }
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  aspect-ratio: 1/1;
  color: white;
  background: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  border: 2px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius2};
  transition: ${({ theme }) => theme.transition};
  box-shadow: ${({ theme }) => theme.shadow.primary};
  &:hover {
    background: transparent;
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    transform: scale(1.1);
  }

  ${device.sm} {
    width: 4rem;
  }
`;
