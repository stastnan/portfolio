import styled from "styled-components";

import { device } from "../../breakpoints";

export const StyledWrapper = styled.div`
  margin-inline: auto;
  max-width: 1920px;
  padding: 0 3rem;

  ${device.md} {
    width: ${({ theme }) => theme.contentWidth.md};
    padding: 0 1rem;
  }
`;
