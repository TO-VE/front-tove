import styled from "styled-components";

const StyledFormat = styled.section`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: initial;
  align-items: center;
  padding: 0.8rem;
  margin-bottom: 0.8rem;
`;

const Box = styled.div`
  width: 250px;
  text-align: center;
  background-color: white;
  display: flex;
  flex-direction: column;
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

const ListFormat = styled.div`
  width: 400px;
  text-align: center;
  background-color: white;
  display: flex;
  flex-direction: row;
  border: solid #000000 1px;
  border-radius: 10px;
  justify-items: self-start;
  justify-content: flex-end;
  align-items: baseline;
  padding: 0.8rem;
  margin: 20px;
`;

const RowFormat = styled.div`
  width: 400px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  padding: 0.8rem;
  margin-top: 20px;
`;


const Line = styled.hr`
  border-left: 6px #000000;
  height: 500px;
`;


const ListBox = styled.div`

`;

const Text = styled.span`
  font-size: ${({ theme }) => theme.fonts.size.regular};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.greenDark};
  padding: 0 0.8rem;
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
  font-weight: ${({ theme }) => theme.fonts.weight.light};
  color: ${({ theme }) => theme.black};
  padding: 0 0.8rem;
`;

export { StyledFormat, Box, StyledBox, ListFormat, RowFormat, Line, ListBox, Text, Time, Title, Text1}

