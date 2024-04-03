import styled from "styled-components";

import { device } from "../../ui/Breakpoints";
import { Heading6 } from "../../ui/Typography";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  gap: 2rem;

  ${device.lg} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  ${device.md} {
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: 1fr;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0.5rem;
  text-align: center;
  gap: 0.3rem;

  ${device.md} {
    margin-bottom: 0;
    gap: 0.5rem;
  }
`;

export const PartWrapper = styled.div``;

export const ItalicHeading = styled(Heading6)`
  font-style: italic;
`;

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.textSizesDesktop.h3};
  padding-bottom: 0.5rem;
`;
