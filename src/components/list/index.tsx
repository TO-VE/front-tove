import { StyledBox, Box, ListFormat, RowFormat, Line, Text, Title, Text1} from './style';

const ListElem = () => {
  return (
 
    <ListFormat>
      <Text>모집중</Text>
      <Line></Line>
      <Box>
        <Title>제목</Title>
        <RowFormat>
          <Text1>작성자</Text1>
          <Text1>분 전</Text1>
        </RowFormat>
      </Box>
    </ListFormat>
  );
};


export default ListElem;