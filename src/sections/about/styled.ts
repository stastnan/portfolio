import { device } from "../../ui/Breakpoints";

import styled from "styled-components";

export const ImageWrapper = styled.div`
  display: grid;
  place-items: center;
`;

export const Portrait = styled.img`
  height: fit-content;
  max-height: 30rem;
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius3};
  transition: ${({ theme }) => theme.transition};
  box-shadow: ${({ theme }) => theme.shadow};
  ${device.lg} {
    max-height: 20rem;
  }

  ${device.md} {
    max-height: 15rem;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  ${device.lg} {
    font-size: 0.8rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  ${device.md} {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const LinkContent = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
