import styled from "styled-components";
import { applyMediaQuery } from "styles/mediaQuery";

const StyledRoot = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 8.5rem;
  border: 2px solid ${({ theme }) => theme.greenDark};
  border-radius: ${({ theme }) => theme.borders.light};
  padding: 3.5rem;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
  p {
    color: ${({ theme }) => theme.greenDark};
    font-size: ${({ theme }) => theme.fonts.size.regular};
    font-weight: ${({ theme }) => theme.fonts.weight.regular};
  }
  ${applyMediaQuery("mobile")} {
    grid-template-columns: repeat(4, 5rem);
    grid-gap: 1.5rem;
    padding: 1.5rem;
  }
  ${applyMediaQuery("tablet")} {
    grid-template-columns: repeat(4, 5rem);
    grid-gap: 3.5rem;
    padding: 3.5rem;
  }
`;

const Step = styled.div`
  width: 5rem;
  height: 5rem;
  line-height: 8rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-bottom: 1.5rem;
`;

export { Step, StyledRoot };
