import styled from "styled-components";

import { sharedStyles } from "./shared-styles";

export const AppLink = styled.a<{ variant: "primary" | "light" }>`
  ${sharedStyles}
  text-decoration: none;
`;
