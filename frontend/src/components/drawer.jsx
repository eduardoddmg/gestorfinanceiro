import {
  Button,
  useDisclosure,
  Drawer as DrawerChakra,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  Link
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { dataNavbar } from "../utils";

const Drawer = (props) => {
  const { direction, w, open, setOpen } = props;
    const { linkHeader, linksSecondary } = dataNavbar;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  useEffect(() => {
    open && onOpen();
    !open && onClose();
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
        <DrawerContent bg="green.500" color="white" py={5} fontWeight="bold" fontSize={25} spacing={5}>
          <DrawerCloseButton />
          <DrawerBody>
            <Stack justify="start" pt={20}>
              {linksSecondary.map((link, index) => (
                <Link href={link.href} key={index} onClick={() => setOpen(false)}>
                  {link.name}
                </Link>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </DrawerChakra>
    </>
  );
};

export default Drawer;
