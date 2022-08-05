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

const Login = () => {
  return (
    <LayoutComponent>
      <HStack justify="center" align="center">
        <VStack w="40%" py={20} h="80vh">
          <Image src="/assets/login.svg" alt="login" boxSize="80%" my={10} />
        </VStack>
        <VStack spacing={5} mb={10} w="40%" h="80vh" justify="center">
          <Heading>Login</Heading>
          <Input label="username" width="80%" />
          <Input label="password" width="80%" />
          <Button colorScheme="green" width="80%">
            Enviar
          </Button>
          <Text>
            Não tem uma conta?{" "}
            <LinkChakra as={Link} to="/register" color="green.500" fontWeight="bold">
              Se registrar
            </LinkChakra>
          </Text>
        </VStack>
      </HStack>
    </LayoutComponent>
  );
};

export default Login;
