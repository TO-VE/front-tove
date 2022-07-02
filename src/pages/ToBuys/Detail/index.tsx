import { Link } from "react-router-dom";
import {
  StyledRoot,
  StyledBox,
  InfoContainer,
  Text,
  Text1,
  InfoFormat,
  DetailText,
} from "./style";

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
        <Text>같이 사요</Text>
      </StyledBox>
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
