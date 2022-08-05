import { Heading, VStack, Image } from "@chakra-ui/react";
import React from "react";
import LayoutComponent from "../components/LayoutComponent";
import { useResponsive } from "../hooks";

const Error = () => {
    const responsive = useResponsive();
  return (
    <LayoutComponent>
      <VStack py={0} h="90vh">
        <Image src="/assets/error.svg" alt="erro 404" boxSize="100%" />
      </VStack>
    </LayoutComponent>
  );
};

export default Error;
