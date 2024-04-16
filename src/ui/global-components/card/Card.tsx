import { StyledCard } from "./styled";

interface Props {
  white?: boolean;
  children: React.ReactNode;
  withoutShadow?: boolean;
  inSwiper?: boolean;
}

function Card({ white, children, withoutShadow, inSwiper }: Props) {
  return (
    <StyledCard white={white} withoutShadow={withoutShadow} inSwiper={inSwiper}>
      {children}
    </StyledCard>
  );
}

export default Card;
