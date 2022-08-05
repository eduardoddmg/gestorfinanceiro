import {
  Heading,
  HStack,
  Image,
  Button,
  VStack,
  Text,
  Link as LinkChakra,
} from "@chakra-ui/react";
import React from "react";
import Input from "../components/input";
import LayoutComponent from "../components/LayoutComponent";
import { Link } from "react-router-dom";
import { useResponsive } from "../hooks";

const Register = () => {
  const responsive = useResponsive();
  return (
    <LayoutComponent>
      <HStack justify="center" align="center">
        <VStack spacing={5} mb={10} w={responsive ? "90%" :"40%"} justify="center" py={10}>
          <Heading>Register</Heading>
          <Input label="username" width="80%" />
          <Input label="email" width="80%" />
          <Input label="password" width="80%" />
          <Input label="re-password" width="80%" />
          <Button colorScheme="green" width="80%">
            Enviar
          </Button>
          <Text>
            Já tem uma conta?{" "}
            <LinkChakra
              as={Link}
              to="/login"
              color="green.500"
              fontWeight="bold"
            >
              Fazer login
            </LinkChakra>
          </Text>
        </VStack>
        {!responsive && <VStack w="40%" py={20} h="80vh">
          <Image src="/assets/login.svg" alt="login" boxSize="80%" my={10} />
        </VStack>}
      </HStack>
    </LayoutComponent>
  );
};

export default Register;
