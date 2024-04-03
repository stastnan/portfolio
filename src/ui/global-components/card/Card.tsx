import { StyledCard } from "./styled";

interface Props {
  white?: boolean;
  children: React.ReactNode;
  withoutShadow?: boolean;
}

function Card({ white, children, withoutShadow }: Props) {
  return (
    <StyledCard white={white} withoutShadow={withoutShadow}>
      {children}
    </StyledCard>
  );
}

export default Card;
