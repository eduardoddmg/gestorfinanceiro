import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Stack, HStack, Link } from "@chakra-ui/react";
import Drawer from "../drawer";
import { dataNavbar } from "../../utils";
import { Button } from "../../styles/components";
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const NavbarResponsive = () => {
  const { linkHeader } = dataNavbar;
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <Stack
      bg="green.500"
      color="white"
      fontWeight="bold"
      px={5}
      py={2}
      position="sticky"
      top="0"
      zIndex={10}
      fontSize={25}
    >
      <Drawer open={open} setOpen={setOpen} w="full" direction="left" />
      <HStack justify="space-between">
        <Link href={`/${linkHeader.href}`}>{linkHeader.name}</Link>
        <HStack spacing={4}>
          <Button color="white" onClick={() => navigate("/login")}>
            <BsFillPersonFill />
          </Button>
          <Button color="white" onClick={() => setOpen(true)}>
            <GiHamburgerMenu />
          </Button>
        </HStack>
      </HStack>
    </Stack>
  );
};

export default NavbarResponsive;
