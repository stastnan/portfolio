import styled from "styled-components";

import { device } from "../../ui/Breakpoints";
import { Paragraph } from "../../ui/Typography";

export const AppFooter = styled.footer`
  display: grid;
  place-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem 0 1.5rem 0;
  box-shadow: ${({ theme }) => theme.shadow.footer};

  ${device.md} {
    padding: 1.5rem 0 7rem 0;
  }

  @media (orientation: landscape) and (max-height: 500px) {
    height: 15rem;
    padding: 1.5rem 6rem 1.5rem 0;
  }
`;
export const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.7rem;

  ${device.md} {
    gap: 1rem;
  }
`;

export const StyledHeading = styled(Paragraph)`
  color: hsl(212, 16%, 32%);
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;
