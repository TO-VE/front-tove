import { LogoIcon } from "asset/Icons";
import { StyledRoot } from "./style";

const Logo = () => {
  return (
    <StyledRoot>
      <img src={LogoIcon} />
    </StyledRoot>
  );
};

export default Logo;
