import React from "react";
import { Outlet } from "react-router-dom";

const Todos = () => {
  return (
    <div>
      <header>HOC : Todos</header>
      <Outlet />
    </div>
  );
};

export default Todos;
