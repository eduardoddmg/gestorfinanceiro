import { useMediaQuery } from "usehooks-ts";
import React, { useEffect } from "react";
import { useResponsive } from "../hooks";
import Footer from "./footer";
import NavbarDesktop from "./navbar/NavbarDesktop";
import NavbarResponsive from "./navbar/NavbarResponsive";

const LayoutComponent = ({ children }) => {
  const responsive = useMediaQuery("(max-width: 1000px)");

  return (
    <>
      {responsive ? <NavbarResponsive /> : <NavbarDesktop />}
      {children}
      <Footer />
    </>
  );
};

export default LayoutComponent;
