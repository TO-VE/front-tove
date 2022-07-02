import React from "react";
import { Link, useLocation } from "react-router-dom";
import { StyledRoot, Text } from "./style";
import { IsGreen } from "utils/isGreen";

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <StyledRoot green={IsGreen(pathname)}>
      <Link to="/">
        <Text>오늘 기록</Text>
      </Link>
      <Link to="/tobuy/list">
        <Text>같이 사요</Text>
      </Link>
      <Link to="/todo/list">
        <Text>같이 해요</Text>
      </Link>
      <Text>로그아웃</Text>
    </StyledRoot>
  );
};

export default NavBar;
