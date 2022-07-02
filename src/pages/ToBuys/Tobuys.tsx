import React from "react";
import { Outlet } from "react-router-dom";

const Tobuys = () => {
  return (
    <div>
      <header>HOC : Tobuys</header>
      <Outlet />
    </div>
  );
};

export default Tobuys;
