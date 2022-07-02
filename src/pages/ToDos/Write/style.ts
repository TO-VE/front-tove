import styled from "styled-components";

const StyledFormat = styled.section`
  background-color: white;
  border: solid #47624F 1.5px;
  border-radius: 20px;
  box-shadow: -1px 1px 1px grey;
  display: flex;
  flex-direction: column;
  justify-content: initial;
  align-items: center;
  padding: 0.8rem;
`;

const StyledBox = styled.div`
  width: 100px;
  text-align: center;
  background-color: white;
  border: solid #00462A 1.5px;
  border-radius: 10px;
  box-shadow: -1px 1px 1px grey;
  padding: 0.8rem;
  margin-bottom: 20px;
`;

const InputsFormat = styled.div`
width: 40%;
background-color: white;
display: flex;
flex-direction: row;
justify-items: space-between;
justify-content: flex-end;
align-items: baseline;
padding: 0.8rem;
`;

const registerBtn = styled.div`
width: 100px;
text-align: center;
background-color: white;
border: solid #00462A 1.5px;
border-radius: 10px;
box-shadow: -1px 1px 1px grey;
padding: 0.8rem;
margin-bottom: 20px;
`;

const Text = styled.span`
  font-size: ${({ theme }) => theme.fonts.size.regular};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.greenDark};
  padding: 0 0.8rem;
`;

const Text1 = styled.span`
font-size: ${({ theme }) => theme.fonts.size.small};
font-weight: ${({ theme }) => theme.fonts.weight.medium};
color: ${({ theme }) => theme.black};
padding: 0 0.8rem;
`;

export { StyledFormat, StyledBox, InputsFormat, registerBtn, Text, Text1 };