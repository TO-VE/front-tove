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
  const [price, onChangePrice, setPrice] = useInput("");
  const [purchaselink, onChangePurchase, setPurchaselink] = useInput("");
  const [openlink, onChangeOpenlink, setOpenlink] = useInput("");
  const [people, onChangePeople, setPeople] = useInput("");

  const _handleToBuyWrite = () => {
    console.log("_handleToBuyWrite");
  };
  return (
    <StyledRoot>
      <StyledBox>
        <Text>같이 사요</Text>
      </StyledBox>
      <InputContainer>
        <InputsFormat>
          <Text1>제품명</Text1>
          <Input
            name="title"
            id="title"
            placeholder="챌린지명"
            value={title}
            onChange={onChangeTitle}
          />
        </InputsFormat>
        <InputsFormat>
          <Text1>제품 가격</Text1>
          <Input
            name="price"
            id="price"
            placeholder="제품 가격"
            value={price}
            onChange={onChangePrice}
          />
        </InputsFormat>
        <InputsFormat>
          <Text1>제품 링크</Text1>
          <Input
            name="purchase link"
            id="purchase link"
            placeholder="제품 링크"
            value={purchaselink}
            onChange={onChangePurchase}
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
        <Text onClick={_handleToBuyWrite}>등록하기</Text>
      </StyledBox>
    </StyledRoot>
  );
};

export default Write;
