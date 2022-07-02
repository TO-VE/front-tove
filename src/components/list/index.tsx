import { StyledBox, Text, Title } from './style';
import Input from 'components/input';
import useInput from 'hooks/useInput';
import { StyledButton } from 'components';
import { theme } from 'styles/theme';
import { Link } from 'react-router-dom';

const listElem = () => {
    return (
    <StyledBox>
        <Text>모집중</Text>
        <Title>제목</Title>
        <Text>작성자</Text>
    </StyledBox>
    );
};

export default listElem;