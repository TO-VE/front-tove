import {
  StyledRoot,
  StyledBox,
  InputContainer,
  InputsFormat,
  Text,
  Text1,
  RangeSlide,
} from "./style";
import Input from "components/input";
import useInput from "hooks/useInput";

const Write = () => {
  const [title, onChangeTitle, setTitle] = useInput("");
  const [description, onChangeDescription, setDescription] = useInput("");
  const [deposit, onChangeDeposit, setDeposit] = useInput("");
  const [proof, onChangeProof, setProof] = useInput("");
  const [openlink, onChangeOpenlink, setOpenlink] = useInput("");
  const [people, onChangePeople, setPeople] = useInput("");
  const _handleToDoWrite = () => {
    console.log("같이 해요 등록");
  };

  return (
    <StyledRoot>
      <StyledBox>
        <Text>같이 해요</Text>
      </StyledBox>
      <InputContainer>
        <InputsFormat>
          <Text1>챌린지명</Text1>
          <Input
            name="title"
            id="title"
            placeholder="챌린지명"
            value={title}
            onChange={onChangeTitle}
          />
        </InputsFormat>
        <InputsFormat>
          <Text1>설명</Text1>
          <Input
            name="description"
            id="description"
            placeholder="설명"
            value={description}
            onChange={onChangeDescription}
          />
        </InputsFormat>
        <InputsFormat>
          <div>
            <Text1>인원 수 </Text1>
            <Text1>{people ? people : 0}명</Text1>
          </div>
          <RangeSlide
            id="width"
            type="range"
            value={people}
            step="1"
            min="1"
            max="10"
            onChange={onChangePeople}
          />{" "}
        </InputsFormat>
        <InputsFormat>
          <Text1>보증금</Text1>
          <Input
            name="deposit"
            id="deposit"
            placeholder="보증금"
            value={deposit}
            onChange={onChangeDeposit}
          />
        </InputsFormat>
        <InputsFormat>
          <Text1>인증 방법</Text1>
          <Input
            name="proof"
            id="proof"
            placeholder="인증 방법"
            value={proof}
            onChange={onChangeProof}
          />
        </InputsFormat>
        <InputsFormat>
          <Text1>오픈채팅링크</Text1>
          <Input
            name="openlink"
            id="openlink"
            placeholder="오픈 채팅방 링크"
            value={openlink}
            onChange={onChangeOpenlink}
          />
        </InputsFormat>
      </InputContainer>
      <StyledBox>
        <Text onClick={_handleToDoWrite}>등록하기</Text>
      </StyledBox>
    </StyledRoot>
  );
};

export default Write;
