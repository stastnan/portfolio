import { StyledLink } from "./styled";

interface Props {
  variant: "primary" | "light";
  children: React.ReactNode;
  href: string;
  download?: boolean | string;
}

function AppLink({ variant, children, href, download }: Props) {
  return (
    <StyledLink variant={variant} href={href} download={download}>
      {children}
    </StyledLink>
  );
}

export default AppLink;
