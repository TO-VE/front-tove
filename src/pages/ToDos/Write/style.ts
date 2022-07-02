import styled from "styled-components";

const StyledFormat = styled.section`
  background-color: white;
  border: #47624F;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-items: space-between;
  justify-content: flex-end;
  align-items: center;
  padding: 0.8rem;
`;

const StyledBox = styled.view`
  width: 100px;
  text-align: center;
  background-color: white;
  border: solid #00462A 1.5px;
  border-radius: 10px;
  box-shadow: -1px 1px 1px grey;
  padding: 0.8rem;
`;

const InputsFormat = styled.div`
width: fit-content;
background-color: white;
display: flex;
flex-direction: column;
justify-items: space-between;
justify-content: flex-end;
align-items: center;
padding: 0.8rem;
`;


const Text = styled.span`
  font-size: ${({ theme }) => theme.fonts.size.regular};
  font-weight: ${({ theme }) => theme.fonts.weight.small};
  color: ${({ theme }) => theme.greenDark};
  padding: 0 0.8rem;
`;

const Text1 = styled.span`
font-size: ${({ theme }) => theme.fonts.size.regular};
font-weight: ${({ theme }) => theme.fonts.weight.small};
color: ${({ theme }) => theme.greenDark};
padding: 0 0.8rem;
`;

export { StyledFormat, StyledBox, InputsFormat, Text, Text1 };