import React from "react";
import { Outlet } from "react-router-dom";
import { theme } from "styles/theme";
import styled from "styled-components";

const Tobuys = () => {
  return (
    <Section>
      <Outlet />
    </Section>
  );
};

export default Tobuys;

const Section = styled.div`
  background-color: ${theme.light.greenLight};
`;
