import React from "react";
import { Button, HStack, Link as LinkChakra } from "@chakra-ui/react";
import { dataNavbar } from "../../utils";
import { Link } from "react-router-dom";

const NavbarDesktop = (props) => {
  const { linkHeader, linksSecondary, btn } = dataNavbar;
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
        <LinkChakra px={6} href={linkHeader.href}>
          {linkHeader.name}
        </LinkChakra>
        <HStack bg="green.500" spacing={4}>
          {linksSecondary.map((item, index) => (
            <LinkChakra href={`/${item.href}`} key={index} px={6}>
              {item.name}
            </LinkChakra>
          ))}
          <Button as={Link} to="/login" color="green.500">{btn.name}</Button>
        </HStack>
      </HStack>
    </>
  );
};

export default NavbarDesktop;
