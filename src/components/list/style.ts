import styled from "styled-components";

const Box = styled.div`
  width: 250px;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 0.8rem;
`;

const StyledBox = styled.div`
  width: 100px;
  text-align: center;
  background-color: white;
  border: solid #00462a 1.5px;
  border-radius: 10px;
  box-shadow: -1px 1px 1px grey;
  padding: 0.8rem;
`;

const ListFormat = styled.div`
  width: 400px;
  vertical-align: middle;
  background-color: white;
  display: flex;
  flex-direction: row;
  border: solid #000000 1px;
  border-radius: 10px;
  justify-items: self-start;
  justify-content: flex-end;
  align-items: center;
  margin: 20px;
`;

const RowFormat = styled.div`
  width: 250px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: baseline;
  padding: 0.8rem;
  margin-top: 20px;
`;


const Line = styled.div`
  width: 150px;
  height: 70px;
  text-align: center;
  border-right: solid #000000 1.5px;
  padding: 2.0rem;
  margin: 10px;
`;


const Text = styled.span`
  font-size: ${({ theme }) => theme.fonts.size.medium};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.greenDark};
`;

const Time = styled.span`
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


const Text1 = styled.span`
  font-size: ${({ theme }) => theme.fonts.size.small};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  color: ${({ theme }) => theme.black};
  padding: 0 0.8rem;
`;

export { Box, StyledBox, ListFormat, RowFormat, Line, Text, Time, Title, Text1}


