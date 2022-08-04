import React from "react";
import Navbar from "./navbar/Navbar";
import { dataNavbar } from "../utils";
import Footer from "./footer";

const LayoutComponent = ({ children }) => {
  const { linkHeader, linksPrincipal, linksSecondary } = dataNavbar;
  
  return (
    <>
      <Navbar
        linkHeader={linkHeader}
        linksPrincipal={linksPrincipal}
        linksSecondary={linksSecondary}
      />
      {children}
      <Footer />
    </>
  );
};

export default LayoutComponent;
