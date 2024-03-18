import { StyledWrapper } from "./styled";

interface Props {
  children?: React.ReactNode;
}
function GeneralWrapper({ children }: Props) {
  return <StyledWrapper>{children}</StyledWrapper>;
}

export default GeneralWrapper;
