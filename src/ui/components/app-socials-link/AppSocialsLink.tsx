import { SocialsLink } from "./styled";

interface Props {
  children: React.ReactNode;
  href: string;
  target: string;
  rel: string;
  header?: boolean;
}
function AppSocialsLink({ children, header, href, rel, target }: Props) {
  return (
    <SocialsLink header={header} href={href} rel={rel} target={target}>
      {children}
    </SocialsLink>
  );
}

export default AppSocialsLink;
