import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./UI/Header";

function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default RootLayout;
