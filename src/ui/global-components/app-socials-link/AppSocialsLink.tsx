import { SocialsLink } from "./styled";

interface Props {
  children: React.ReactNode;
  href: string;
  target: string;
  rel: string;
  header?: boolean;
}
function AppSocialsLink({ children, header }: Props) {
  return <SocialsLink header={header}>{children}</SocialsLink>;
}

export default AppSocialsLink;
