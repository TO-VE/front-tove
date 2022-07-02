import { StyledInput, StyledButton } from "components";
import useInput from "hooks/useInput";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "styles/theme";

const Signup = () => {
  const [email, onChangeEmail, setEmail] = useInput("");
  const [password, onChangePwd, setPassword] = useInput("");
  const [checkpassword, onChangecheckPwd, setCheckPassword] = useInput("");

  const _handleSignUpBtn = () => {
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
      <StyledInput
        name="checkpassword"
        id="checkpassword"
        placeholder="write password again"
        value={checkpassword}
        onChange={onChangecheckPwd}
      />
      <StyledButton
        fontColor={theme.light.white}
        fontSize={theme.light.fonts.size.regular}
        fontWeight={theme.light.fonts.weight.bold}
        backgroundColor={theme.light.greenSub}
        title="Signup"
        onClick={_handleSignUpBtn}
      />
      <Link to="/login">
        <StyledButton
          fontColor={theme.light.white}
          fontSize={theme.light.fonts.size.regular}
          fontWeight={theme.light.fonts.weight.bold}
          backgroundColor={theme.light.greenLight}
          title="Login"
        />
      </Link>
    </StyledRoot>
  );
};

export default Signup;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
