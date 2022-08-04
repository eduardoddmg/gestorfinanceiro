import React, { useEffect, useState } from "react";
import { VStack, HStack, Flex, Link, Stack, Button } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useResponsive } from "../../hooks";


const Navbar = (props) => {
  const responsive = useResponsive();
  const [open, setOpen] = useState(false);


  const closeNav = () => setOpen(false);

  const { linkHeader, linksPrincipal, linksSecondary } = props;
  return (
    <>
      <Stack
        as="nav"
        direction={responsive ? "column" : "row"}
        justify={!responsive && "space-between"}
        p={4}
        bg="green.500"
        color="#000"
        fontWeight="bold"
        w="100%"
        position="sticky"
        top="0"
        fontSize={responsive && 20}
        h={responsive && open && '100vh'}
        zIndex={9999}
      >
        <HStack justify="space-between">
          <Link px={6} href={linkHeader.href} onClick={closeNav}>
            {linkHeader.name}
          </Link>
          {responsive && (
            <Button onClick={() => setOpen(!open)} color="black" fontWeight="bold">
              {open ? <AiOutlineClose /> : <GiHamburgerMenu />}
            </Button>
          )}
        </HStack>
        {(!responsive || open) && (
          <Stack
            direction={responsive && "column"}
            py={responsive && "10"}
            bg="green.500"
            spacing={!responsive ? 4 : 10}
          >
            {linksSecondary.map((item, index) => (
              <Link href={item.href} key={index} px={6} onClick={closeNav}>
                {item.name}
              </Link>
            ))}
          </Stack>
        )}
      </Stack>
    </>
  );
};

export default Navbar;
