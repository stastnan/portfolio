import styled from "styled-components";

import { device } from "../../breakpoints";
import { Paragraph } from "../../typography";

export const StyledParagraph = styled(Paragraph)`
  text-align: center;
  margin: 0.5 rem auto 4rem;
  width: 40%;

  ${device.md} {
    width: 72%;
    margin-bottom: 3rem;
  }
`;
