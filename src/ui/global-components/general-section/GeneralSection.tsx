import React from "react";

import { StyledSection } from "./styled";

interface Props {
  bgcolor: "light" | "dark";
  children: React.ReactNode;
  id: string;
}

const GeneralSection = React.forwardRef<HTMLDivElement, Props>(
  ({ bgcolor, children, id }, ref) => {
    return (
      <StyledSection bgcolor={bgcolor} id={id} ref={ref}>
        {children}
      </StyledSection>
    );
  },
);

export default GeneralSection;
