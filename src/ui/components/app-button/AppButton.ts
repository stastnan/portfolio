import styled from "styled-components";

import { sharedStyles as appButtonStyles } from "../app-link/shared-styles";

export const AppButton = styled.button<{ variant: "primary" | "light" }>`
  ${appButtonStyles}
`;
