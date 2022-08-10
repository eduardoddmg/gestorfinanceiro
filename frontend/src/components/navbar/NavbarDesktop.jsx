import React, { useContext } from "react";
import { Button, HStack, Link as LinkChakra } from "@chakra-ui/react";
import { dataNavbar } from "../../utils";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { BiExit } from 'react-icons/bi';
import { userContext } from '../../context';

const NavbarDesktop = (props) => {
  const { user, changeUsername } = useContext(userContext);
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
        <LinkChakra px={6} href={`/${linkHeader.href}`}>
          {linkHeader.name}
        </LinkChakra>
        <HStack bg="green.500" spacing={4}>
          {linksSecondary.map((item, index) => (
            <LinkChakra href={`/${item.href}`} key={index} px={6}>
              {item.name}
            </LinkChakra>
          ))}
          {!user ? 
            (<Button
              as={Link}
              to="/login"
              leftIcon={<BsFillPersonFill />}
              color="green.500">
                {btn.name}
              </Button>) : 
            (<Button
              leftIcon={<BiExit />}
              color="green.500"
              onClick={() => changeUsername('')}
              >
                Sair
              </Button>)}
        </HStack>
      </HStack>
    </>
  );
};

export default NavbarDesktop;
