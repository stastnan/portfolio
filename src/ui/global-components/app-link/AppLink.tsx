import { StyledLink } from "./styled";

interface Props {
  variant: "primary" | "light";
  children: React.ReactNode;
  href: string;
}

function AppLink({ variant, children, href }: Props) {
  return (
    <StyledLink variant={variant} href={href}>
      {children}
    </StyledLink>
  );
}

export default AppLink;
