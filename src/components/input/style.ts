import styled from "styled-components";

const StyledRoot = styled.input`
  border: 2px solid ${({ theme }) => theme.gray};
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.darkGreen};
  border-radius: ${({ theme }) => theme.borders.light};
  font-size: ${({ theme }) => theme.fonts.size.regular};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  padding: 0.8rem;
  margin-bottom: 2rem;
  width: 25rem;
`;

export { StyledRoot };
