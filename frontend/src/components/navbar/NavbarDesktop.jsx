import React from "react";
import { HStack, Link } from "@chakra-ui/react";
import { dataNavbar } from "../../utils";

const NavbarDesktop = (props) => {
  const { linkHeader, linksSecondary } = dataNavbar;
  return (
    <>
      <HStack
        justify="space-between"
        as="nav"
        p={4}
        bg="green.500"
        color="#fff"
        fontWeight="bold"
        w="100%"
        position="sticky"
        top="0"
        zIndex={9999}
      >
        <Link px={6} href={linkHeader.href}>
          {linkHeader.name}
        </Link>
        <HStack bg="green.500" spacing={4}>
          {linksSecondary.map((item, index) => (
            <Link href={item.href} key={index} px={6}>
              {item.name}
            </Link>
          ))}
        </HStack>
      </HStack>
    </>
  );
};

export default NavbarDesktop;
