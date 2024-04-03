import { StyledLink } from "./styled";

interface Props {
  variant: "primary" | "light";
  children: React.ReactNode;
  href: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
}

function AppLink({ variant, children, href, download, target, rel }: Props) {
  return (
    <StyledLink
      variant={variant}
      href={href}
      download={download}
      target={target}
      rel={rel}
    >
      {children}
    </StyledLink>
  );
}

export default AppLink;
