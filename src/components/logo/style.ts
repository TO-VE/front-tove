import styled from "styled-components";
import { theme } from "styles/theme";
type LogoProps = {
  green: Boolean;
};

const StyledRoot = styled.section<LogoProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3.5rem;
  background-color: ${(props) =>
    props.green ? theme.light.greenLight : theme.light.white};
`;

export { StyledRoot };
