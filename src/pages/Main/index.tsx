import { StyledTitle } from "components";
import { theme } from "styles/theme";
import styled from "styled-components";
const Main = () => {
  return (
    <StyledRoot>
      <StyledTitle
        title="7일 동안 식단 기록"
        fontColor={theme.light.greenDark}
        fontSize={theme.light.fonts.size.large}
        borderRadius={theme.light.borders.light}
      />
    </StyledRoot>
  );
};

export default Main;

const StyledRoot = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 3.5rem;
`;
