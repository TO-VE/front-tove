import styled from "styled-components";

const StyledRoot = styled.section`
  background-color: ${({ theme }) => theme.pink};
`;
const Text = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.large};
  font-weight: ${({ theme }) => theme.fonts.wieght.bold};
`;

export { StyledRoot, Text };
