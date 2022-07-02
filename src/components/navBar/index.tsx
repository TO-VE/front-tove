import React from "react";
import { Link } from "react-router-dom";
import { StyledRoot, Text } from "./style";

const NavBar = () => {
  return (
    <StyledRoot>
      <Text>네비게이션</Text>
      <Link to="/">
        <span>오늘 기록</span>
      </Link>
      <Link to="/tobuy/list">
        <span>같이 사요</span>
      </Link>
      <Link to="/todo/list">
        <span>같이 해요</span>
      </Link>
      <span>로그아웃</span>
    </StyledRoot>
  );
};

export default NavBar;
