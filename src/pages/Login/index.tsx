import useInput from "hooks/useInput";
import { StyledInput, StyledButton } from "components";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "styles/theme";

const Login = () => {
  const [email, onChangeEmail, setEmail] = useInput("");
  const [password, onChangePwd, setPassword] = useInput("");

  console.log("login", theme);
  const _handleLoginBtn = () => {
    console.log("로그인 버튼 클릭");
  };
  return (
    <StyledRoot>
      <StyledInput
        name="email"
        id="email"
        placeholder="tove@tove.com"
        value={email}
        onChange={onChangeEmail}
      />
      <StyledInput
        name="password"
        id="password"
        placeholder="tovepassword"
        value={password}
        onChange={onChangePwd}
      />
      <StyledButton
        fontColor={theme.light.white}
        fontSize={theme.light.fonts.size.regular}
        fontWeight={theme.light.fonts.weight.bold}
        backgroundColor={theme.light.greenSub}
        title="login"
        onClick={_handleLoginBtn}
      />
      <Link to="/signup">
        <StyledButton
          fontColor={theme.light.white}
          fontSize={theme.light.fonts.size.regular}
          fontWeight={theme.light.fonts.weight.bold}
          backgroundColor={theme.light.greenLight}
          title="SignUp"
        />
      </Link>
    </StyledRoot>
  );
};

export default Login;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
