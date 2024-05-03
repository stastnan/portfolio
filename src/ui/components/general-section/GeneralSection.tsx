import * as React from "react";

import { StyledSection } from "./styled";

interface Props {
  bgcolor: "light" | "dark";
  children: React.ReactNode;
  id: string;
  block?: boolean;
  name?: string;
  ref?: React.MutableRefObject<null>;
}

const GeneralSection = React.forwardRef<
  HTMLDivElement & { name?: string },
  Props
>(({ bgcolor, children, id, block, name }, ref) => {
  return (
    <StyledSection
      bgcolor={bgcolor}
      id={id}
      ref={ref}
      block={block}
      name={name}
    >
      {children}
    </StyledSection>
  );
});

export default GeneralSection;
