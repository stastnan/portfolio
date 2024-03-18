import { StyledLink } from "./styled";

interface Props {
  variant: "primary" | "light";
  children: React.ReactNode;
}

function AppLink({ variant, children, ...props }: Props) {
  return (
    <StyledLink variant={variant} {...props}>
      {children}
    </StyledLink>
  );
}

export default AppLink;
