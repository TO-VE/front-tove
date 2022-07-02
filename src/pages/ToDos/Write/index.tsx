import { StyledBox, StyledFormat, InputsFormat, registerBtn, Text, Text1 } from './style';
import Input from 'components/input';
import useInput from 'hooks/useInput';
import { StyledButton } from 'components';
import { theme } from 'styles/theme';
import { Link } from 'react-router-dom';

const Write = () => {
  const [title, onChangeTitle, setTitle] = useInput("");
  const [description, onChangeDescription, setDescription] = useInput("");
  const [deposit, onChangeDeposit, setDeposit] = useInput("");
  const [proof, onChangeProof, setProof] = useInput("");
  const [openlink, onChangeOpenlink, setOpenlink] = useInput("");


  return <StyledFormat>
    <StyledBox>
      <Text>같이 해요</Text>
    </StyledBox>
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
    <Link to="/todo/admin">
      <StyledBox>
        <Text>등록하기</Text>
      </StyledBox>
    </Link>
  </StyledFormat>;
};

export default Write;
