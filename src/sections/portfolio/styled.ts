import styled from "styled-components";

import { device } from "../../ui/breakpoints";

export const Wrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: auto;
  padding: 0 3rem;

  ${device.md} {
    padding: 1rem;
  }
  ${device.sm} {
    padding: 0.1rem;
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

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  text-align: center;

  ${device.sm} {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const PartWrapper = styled.div``;
