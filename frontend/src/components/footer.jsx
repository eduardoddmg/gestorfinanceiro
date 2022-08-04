import { Center, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Center bg="black" color="white" py={3}>
      <Text fontSize="medium" fontWeight="bold">Todos os direitos reservados &copy; - Gestor Financeiro</Text>
    </Center>
  );
};

export default Footer;
