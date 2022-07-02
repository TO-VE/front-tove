import { LogoIcon } from "asset/Icons";
import { Link, useLocation } from "react-router-dom";
import { StyledRoot } from "./style";
import { IsGreen } from "utils/isGreen";
const Logo = () => {
  const { pathname } = useLocation();
  return (
    <StyledRoot green={IsGreen(pathname)}>
      <Link to="/">
        <img src={LogoIcon} />
      </Link>
    </StyledRoot>
  );
};

export default Logo;
