import styled from "styled-components";

import { sharedStyles } from "./shared-styles";

export const AppButton = styled.button<{ variant: "primary" | "light" }>`
  ${sharedStyles}
`;
