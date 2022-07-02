import { StyledTitle, Bedge, Diet, Carbon } from "components";
import { theme } from "styles/theme";
import styled from "styled-components";
import { applyMediaQuery } from "styles/mediaQuery";
const Main = () => {
  return (
    <StyledRoot>
      <MainContainer>
        <StyledTitle
          title="7일 동안 식단 기록"
          fontColor={theme.light.greenDark}
          fontSize={theme.light.fonts.size.large}
          borderRadius={theme.light.borders.light}
        />
        <Diet />
      </MainContainer>
      <MainContainer>
        <StyledTitle
          title="나의 탄소 나무"
          fontColor={theme.light.greenDark}
          fontSize={theme.light.fonts.size.large}
          borderRadius={theme.light.borders.light}
        />
        <Carbon />
      </MainContainer>
      <MainContainer>
        <StyledTitle
          title="나의 활동 뱃지"
          fontColor={theme.light.greenDark}
          fontSize={theme.light.fonts.size.large}
          borderRadius={theme.light.borders.light}
        />
        <Bedge />
      </MainContainer>
    </StyledRoot>
  );
};

export default Main;

const StyledRoot = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 4.5rem 3.5rem;

  ${applyMediaQuery("mobile")} {
    align-items: flex-start;
    align-content: flex-start;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 2.5rem;
`;
