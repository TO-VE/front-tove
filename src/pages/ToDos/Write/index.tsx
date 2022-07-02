import React from 'react'
import styled from 'styled-components'
import { StyledBox, StyledFormat, InputsFormat, Text, Text1 } from './style';
import Input from 'components/input';
import useInput from 'hooks/useInput';

const Write = () => {
  const [title, onChangeTitle, setTitle] = useInput("");

  return (<StyledFormat>
    <StyledBox>
      <Text>같이 해요</Text>
    </StyledBox>
    <InputsFormat>
      <Text1>챌린지명</Text1>
      <Input
        name="password"
        id="password"
        placeholder="챌린지명"
        value={title}
        onChange={onChangeTitle}
      />
    </InputsFormat> 
    <InputsFormat>
      <Text1>설명</Text1>
      <Input
        name="password"
        id="password"
        placeholder="설명"
        value={title}
        onChange={onChangeTitle}
      />
    </InputsFormat> 
    <InputsFormat>
      <Text1>보증금</Text1>
      <Input
        name="password"
        id="password"
        placeholder="보증금"
        value={title}
        onChange={onChangeTitle}
      />
    </InputsFormat> 
    <InputsFormat>
      <Text1>인증 방법</Text1>
      <Input
        name="password"
        id="password"
        placeholder="인증 방법"
        value={title}
        onChange={onChangeTitle}
      />
    </InputsFormat> 

    
  </StyledFormat>);
};

export default Write;
