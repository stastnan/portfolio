import { StyledSection } from "./styled";

interface Props {
  bgcolor: "light" | "dark";
  children: React.ReactNode;
  id: string;
}
//TODO: after scrolling implementation delete id from Props

function GeneralSection({ bgcolor, children }: Props) {
  return <StyledSection bgcolor={bgcolor}>{children}</StyledSection>;
}

export default GeneralSection;
