import styled from "styled-components";
import { device } from "../../Breakpoints";

export const StyledWrapper = styled.div`
    width: ${({ theme }) => theme.contentWidth.lg};
    margin-inline: auto;
    max-width: 1920px;

    ${device.md} {
      width: ${({ theme }) => theme.contentWidth.md};
    }
`