import React from "react";
import { StyledRoot, Text } from "./style";
const NavBar = () => {
  return (
    <StyledRoot>
      <Text>네비게이션</Text>
      <span>오늘 기록</span>
      <span>같이 사요</span>
      <span>같이 해요</span>
      <span>로그아웃</span>
    </StyledRoot>
  );
};

export default NavBar;
