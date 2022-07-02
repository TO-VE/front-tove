import styled from "styled-components";

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-items: center;
`;

const InputContainer = styled.section`
  background-color: white;
  border: solid #47624f 1.5px;
  border-radius: 20px;
  box-shadow: -1px 1px 1px grey;
  display: flex;
  flex-direction: column;
  justify-content: initial;
  align-items: center;
  padding: 1.5rem 4.5rem;
  margin: 1.5rem;
`;

const StyledBox = styled.div`
  width: 100px;
  text-align: center;
  background-color: white;
  border: solid #00462a 1.5px;
  border-radius: 10px;
  box-shadow: -1px 1px 1px grey;
  padding: 0.8rem;
  margin-bottom: 20px;
`;

const InputsFormat = styled.div`
  width: 40rem;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 0;
`;

const Text = styled.span`
  font-size: ${({ theme }) => theme.fonts.size.regular};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.greenDark};
`;

const Text1 = styled.span`
  font-size: ${({ theme }) => theme.fonts.size.regular};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.black};
  padding: 0 0.8rem;
`;

const RangeSlide = styled.input`
  width: 25rem;
`;

export {
  StyledRoot,
  InputContainer,
  StyledBox,
  InputsFormat,
  Text,
  RangeSlide,
  Text1,
};
