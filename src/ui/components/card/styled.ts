import styled from "styled-components";

import { device } from "../../breakpoints";

interface Props {
  white?: boolean;
  withoutShadow?: boolean;
  inSwiper?: boolean;
}

export const StyledCard = styled.div<Props>`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius1};
  background-color: ${({ theme, white }) =>
    white ? theme.colors.white : theme.colors.light};
  font-size: 0.9rem;
  line-height: ${({ theme }) => theme.lineHeight.middle};
  box-shadow: ${({ theme, withoutShadow }) =>
    withoutShadow ? "none" : theme.shadow.primary};

  ${device.md} {
    font-size: 0.8rem;
    gap: 0.8rem;
  }

  ${device.sm} {
    padding: ${({ inSwiper }) => (inSwiper ? "2rem 1rem" : "2rem")};
  }
`;
