import { StyledBox, StyledFormat, InputsFormat, Text, Text1 } from './style';
import Input from 'components/input';
import useInput from 'hooks/useInput';
import { StyledButton } from 'components';
import { theme } from 'styles/theme';
import { Link } from 'react-router-dom';

const Write = () => {
  const [title, onChangeTitle, setTitle] = useInput("");
  const [price, onChangePrice, setPrice] = useInput("");
  const [purchaselink, onChangePurchase, setPurchaselink] = useInput("");
  const [peoplenum, onChangePeoplenum, setPeoplenum] = useInput("");
  const [openlink, onChangeOpenlink, setOpenlink] = useInput("");


  return <StyledFormat>
    <StyledBox>
      <Text>같이 사요</Text>
    </StyledBox>
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
      <Text1>인원</Text1>
      <Input
        name="proof"
        id="proof"
        placeholder="인원"
        value={peoplenum}
        onChange={onChangePeoplenum}
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
    <Link to="/tobuy/admin">
      <StyledButton
            fontColor={theme.light.greenDark}
            fontSize={theme.light.fonts.size.regular}
            fontWeight={theme.light.fonts.weight.bold}
            backgroundColor={theme.light.white}
            title="등록하기"
          />
    </Link>
  </StyledFormat>;
};

export default Write;
