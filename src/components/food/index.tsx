import { StyledRoot, FoodIcon, FoodText } from "./style";

type FoodProps = {
  src: string;
  alt: string;
  name: string;
};

const FoodContainer: React.FC<FoodProps> = ({ src, alt, name }) => {
  return (
    <StyledRoot>
      <FoodIcon src={src} alt={alt} />
      <FoodText>{name}</FoodText>
    </StyledRoot>
  );
};

export default FoodContainer;
