import { StyledParagraph } from "./styled";

interface Props {
  children: React.ReactNode;
}

function GeneralParagraph({ children }: Props) {
  return <StyledParagraph>{children}</StyledParagraph>;
}

export default GeneralParagraph;
