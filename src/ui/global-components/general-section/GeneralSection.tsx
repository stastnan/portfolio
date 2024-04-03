import React from "react";

import { StyledSection } from "./styled";

interface Props {
  bgcolor: "light" | "dark";
  children: React.ReactNode;
  id: string;
  block?: boolean;
}

const GeneralSection = React.forwardRef<HTMLDivElement, Props>(
  ({ bgcolor, children, id, block }, ref) => {
    return (
      <StyledSection bgcolor={bgcolor} id={id} ref={ref} block={block}>
        {children}
      </StyledSection>
    );
  },
);

export default GeneralSection;
