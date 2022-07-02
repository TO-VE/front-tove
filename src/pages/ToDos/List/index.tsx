import ListElem from 'components/list';
import { Link } from 'react-router-dom';
import { StyledFormat, StyledBox, Text } from './style';

const List = () => {
  return (
  <StyledFormat>
    <StyledBox>
      <Text>같이 해요</Text>
    </StyledBox>
    <ListElem></ListElem>
    <ListElem></ListElem>
    <ListElem></ListElem>
    <ListElem></ListElem>
    <Link to="/todo/admin">
        <StyledBox>
          <Text>등록하기</Text>
        </StyledBox>
    </Link>
  </StyledFormat>
  );
};

export default List;
