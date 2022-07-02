import {
  ChickenIcon,
  CowIcon,
  PigIcon,
  EggIcon,
  FishIcon,
  MilkIcon,
} from "asset/Icons";
import styled from "styled-components";
import { FoodContainer, StyledButton } from "components";
import { theme } from "styles/theme";
import { applyMediaQuery } from "styles/mediaQuery";

const Check = () => {
  const _handleCheckBtn = () => {
    console.log("_handleCheckBtn");
  };
  return (
    <StyledRoot>
      <FoodHeader>오늘 먹지 않은 음식은?</FoodHeader>
      <FootSection>
        <FoodContainer src={ChickenIcon} alt="chickenIcon" name="닭고기" />
        <FoodContainer src={CowIcon} alt="chickenIcon" name="소고기" />
        <FoodContainer src={PigIcon} alt="pigIcon" name="돼지고기" />
        <FoodContainer src={FishIcon} alt="fishIcon" name="생선" />
        <FoodContainer src={EggIcon} alt="eggIcon" name="달걀" />
        <FoodContainer src={MilkIcon} alt="milkIcon" name="우유" />
      </FootSection>
      <StyledButton
        fontColor={theme.light.white}
        fontSize={theme.light.fonts.size.medium}
        fontWeight={theme.light.fonts.weight.bold}
        backgroundColor={theme.light.greenSub}
        title="제출하기"
        onClick={_handleCheckBtn}
      />
    </StyledRoot>
  );
};

export default Check;

const StyledRoot = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 3.5rem;
`;

const FoodHeader = styled.header`
  font-size: ${({ theme }) => theme.fonts.size.medium};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.greenDark};
  padding: 0.8rem;
`;
const FootSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
  width: min-content;
  margin-bottom: 3.5rem;
  ${applyMediaQuery("mobile")} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
