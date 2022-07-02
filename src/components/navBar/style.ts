import styled from "styled-components";
import { theme } from "styles/theme";

type NavProps = {
  green: Boolean;
};

const StyledRoot = styled.section<NavProps>`
  display: flex;
  flex-direction: row;
  justify-items: space-between;
  justify-content: flex-end;
  align-items: center;
  padding: 0.8rem;
  background-color: ${(props) =>
    props.green ? theme.light.greenLight : theme.light.white};
`;
const Text = styled.span`
  font-size: ${({ theme }) => theme.fonts.size.regular};
  font-weight: ${({ theme }) => theme.fonts.weight.small};
  color: ${({ theme }) => theme.greenDark};
  padding: 0 0.8rem;
`;

export { StyledRoot, Text };
