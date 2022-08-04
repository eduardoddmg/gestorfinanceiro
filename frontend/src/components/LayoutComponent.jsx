import React from "react";
import { useResponsive } from "../hooks";
import Footer from "./footer";
import NavbarDesktop from "./navbar/NavbarDesktop";
import NavbarResponsive from "./navbar/NavbarResponsive";

const LayoutComponent = ({ children }) => {
  const responsive = useResponsive();

  return (
    <>
      {responsive ? <NavbarResponsive /> : <NavbarDesktop />}
      {children}
      <Footer />
    </>
  );
};

export default LayoutComponent;
