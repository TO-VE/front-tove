import useInput from "hooks/useInput";
import Input from "components/input";
import styled from "styled-components";
const Login = () => {
  const [email, onChangeEmail, setEmail] = useInput("");
  const [password, onChangePwd, setPassword] = useInput("");
  return (
    <StyledRoot>
      <Input
        name="email"
        id="email"
        placeholder="tove@tove.com"
        value={email}
        onChange={onChangeEmail}
      />
      <Input
        name="password"
        id="password"
        placeholder="tovepassword"
        value={password}
        onChange={onChangePwd}
      />
    </StyledRoot>
  );
};

export default Login;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
