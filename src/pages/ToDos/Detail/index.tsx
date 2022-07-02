import { Link } from "react-router-dom";
import {
  StyledRoot,
  StyledBox,
  InfoContainer,
  Text,
  Text1,
  InfoFormat,
  DetailText,
  TagBox,
} from "./style";
import { theme } from "styles/theme";
import { StyledTitle } from "components";

const Detail = () => {
  const _handleToDoList = () => {
    console.log("_handleToDoList");
  };

  const _handleToDoFin = () => {
    console.log("_handleToDoFin");
  };
  return (
    <StyledRoot>
      <StyledBox>
        <Text>매일 매일 식단 인증할 사람 구해요</Text>
      </StyledBox>
      <TagBox>
        <StyledTitle
          title="1주일"
          fontColor={theme.light.greenDark}
          fontSize={theme.light.fonts.size.small}
          borderRadius={theme.light.borders.hard}
        />
        <StyledTitle
          title="1만원"
          fontColor={theme.light.greenDark}
          fontSize={theme.light.fonts.size.small}
          borderRadius={theme.light.borders.hard}
        />
        <StyledTitle
          title="6명"
          fontColor={theme.light.greenDark}
          fontSize={theme.light.fonts.size.small}
          borderRadius={theme.light.borders.hard}
        />
      </TagBox>
      <InfoContainer>
        <InfoFormat>
          <Text1>챌린지명</Text1>
          <DetailText>
            챌린지명챌린지명챌린지명챌린지명챌린지명챌린지명챌린지명 챌린지명
            챌린지명 챌린지명
          </DetailText>
        </InfoFormat>

        <InfoFormat>
          <Text1>인증방법</Text1>
          <DetailText>
            챌린지명챌린지명챌린지명챌린지명챌린지명챌린지명챌린지명 챌린지명
            챌린지명 챌린지명
          </DetailText>
        </InfoFormat>

        <InfoFormat>
          <Text1>오픈채팅방 링크</Text1>
          <DetailText>
            챌린지명챌린지명챌린지명챌린지명챌린지명챌린지명챌린지명 챌린지명
            챌린지명 챌린지명
          </DetailText>
        </InfoFormat>
      </InfoContainer>
      <Link to="/todo/list">
        <StyledBox>
          <Text onClick={_handleToDoList}>목록 보기</Text>
        </StyledBox>
      </Link>

      <StyledBox>
        <Text onClick={_handleToDoFin}>마감하기</Text>
      </StyledBox>
    </StyledRoot>
  );
};

export default Detail;
