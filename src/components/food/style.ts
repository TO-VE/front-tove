import styled from "styled-components";
import { applyMediaQuery } from "styles/mediaQuery";

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FoodIcon = styled.img`
  width: 20rem;
  height: 20rem;
`;

const FoodText = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.medium};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.greenDark};

  ${applyMediaQuery("mobile")} {
    font-size: ${({ theme }) => theme.fonts.size.small};
    font-weight: ${({ theme }) => theme.fonts.weight.medium};
  }
`;
export { StyledRoot, FoodIcon, FoodText };
