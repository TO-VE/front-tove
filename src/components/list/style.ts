import styled from "styled-components";

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

const Text = styled.span`
  font-size: ${({ theme }) => theme.fonts.size.regular};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.greenDark};
  padding: 0 0.8rem;
`;

const Title = styled.span`
  font-size: ${({ theme }) => theme.fonts.size.regular};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.greenDark};
  padding: 0 0.8rem;
`;


export { StyledBox, Text, Title };