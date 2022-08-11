import {
  Button,
  useDisclosure,
  Drawer as DrawerChakra,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Stack,
  VStack,
  Link as LinkChakra,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React, { useCallback, useEffect, useRef, useContext } from "react";
import { dataNavbar } from "../utils";
import { BsFillPersonFill } from "react-icons/bs";
import { BiExit } from 'react-icons/bi'
import { userContext } from '../context'

const Drawer = (props) => {
  const { direction, w, open, setOpen } = props;
  const { btn, linksSecondary, linkHeader } = dataNavbar;
  const { user, logout } = useContext(userContext);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const callback = useCallback(() => console.log(isOpen), [isOpen]);

  useEffect(() => {
    !isOpen && setOpen(false);
    open && onOpen();
  });

  return (
    <>
      <DrawerChakra
        isOpen={isOpen}
        placement={direction}
        onClose={onClose}
        finalFocusRef={btnRef}
        size={w}
      >
        <DrawerOverlay />
        <DrawerContent
          bg="green.500"
          color="white"
          fontWeight="bold"
          fontSize={25}
          spacing={5}
        >
          <DrawerCloseButton py={6} size="lg" />
          <DrawerBody>
            <Flex direction="column" justify="center" align="center" py={10}>
              <LinkChakra href={`/${linkHeader.href}`} my={3}>
                {linkHeader.name}
              </LinkChakra>
              {linksSecondary.map((link, index) => (
                <LinkChakra
                  href={`/${link.href}`}
                  key={index}
                  onClick={onClose}
                  my={3}
                >
                  {link.name}
                </LinkChakra>
              ))}
              {!user ? <Button
                as={Link}
                leftIcon={<BsFillPersonFill />}
                to="/login"
                color="green.500"
                my={5}
                size="lg"
                fontSize={20}
                onClick={onClose}
              >
                {btn.name}
              </Button> : <Button
                leftIcon={<BiExit />}
                color="green.500"
                my={5}
                size="lg"
                fontSize={20}
                onClick={() => {
                  onClose();
                  logout();
                }}
              >
                Sair
              </Button>}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </DrawerChakra>
    </>
  );
};

export default Drawer;
