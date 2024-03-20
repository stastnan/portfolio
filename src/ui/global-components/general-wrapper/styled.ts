import { device } from "../../Breakpoints";

import styled from "styled-components";

export const StyledWrapper = styled.div`
  margin-inline: auto;
  max-width: 1920px;

  ${device.md} {
    width: ${({ theme }) => theme.contentWidth.md};
  }
`;
