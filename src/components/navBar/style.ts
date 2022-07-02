import styled from "styled-components";

const StyledRoot = styled.section`
  display: flex;
  flex-direction: row;
  justify-items: space-between;
  justify-content: flex-end;
  align-items: center;
  padding: 0.8rem;
`;
const Text = styled.span`
  font-size: ${({ theme }) => theme.fonts.size.regular};
  font-weight: ${({ theme }) => theme.fonts.weight.small};
  color: ${({ theme }) => theme.greenDark};
  padding: 0 0.8rem;
`;

export { StyledRoot, Text };
