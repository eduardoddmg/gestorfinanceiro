import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Stack, HStack, Link, Button } from "@chakra-ui/react";
import Drawer from "../drawer";
import { dataNavbar } from "../../utils";

const NavbarResponsive = () => {
  const { linkHeader } = dataNavbar;
  const [open, setOpen] = useState(false);
  return (
    <Stack
      bg="green.500"
      color="white"
      fontWeight="bold"
      px={5}
      py={2}
      position="sticky"
      top="0"
      zIndex={9999}
      fontSize={25}
    >
      <Drawer open={open} setOpen={setOpen} w="lg" direction="top" />
      <HStack justify="space-between">
        <Link href={linkHeader.href}>{linkHeader.name}</Link>
        <Button color="black" onClick={() => setOpen(!open)}>
          {open ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </Button>
      </HStack>
    </Stack>
  );
};

export default NavbarResponsive;
