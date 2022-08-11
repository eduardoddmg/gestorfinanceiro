import {
  Heading,
  HStack,
  Image,
  Button,
  VStack,
  Text,
  FormLabel,
  FormControl,
  Link as LinkChakra,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  FormHelperText
} from "@chakra-ui/react";
import React, { useState, useContext } from "react";
import LayoutComponent from "../components/LayoutComponent";
import { Link } from "react-router-dom";
import { useResponsive } from "../hooks";
import { useMediaQuery } from 'usehooks-ts';
import { useForm } from 'react-hook-form'; 
import { BiShow, BiHide } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

import { loginUser } from '../utils';
import { userContext } from '../context';

const Login = () => {
  const { user, login } = useContext(userContext);
  const { register, handleSubmit, formState: { errors }} = useForm();
  const responsive = useMediaQuery("(max-width: 1000px)");

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const response = await loginUser(data);
    const userData = response.data;
    login(userData.data.username, userData.data._id.toString());
    if (userData.data) navigate('/dashboard');

  };

  return (
    <LayoutComponent>
      <HStack justify="center" align="center">
       {!responsive && <VStack w="40%" py={20} h="80vh">
          <Image src="/assets/login.svg" alt="login" boxSize="80%" my={10} />
        </VStack>}
        <VStack as="form" onSubmit={handleSubmit(onSubmit)} spacing={5} mb={10} w={responsive ? "90%":"40%"} h="80vh" justify="center">
          <Heading>Login</Heading>
          <FormControl w="80%">
            <FormLabel>Username</FormLabel>
            <Input placelholder="username" width="100%" {...register("username", {required: "Username tem que ter no mínimo 8 caracteres", minLength: { value: 8, message: "Username tem que ter no mínimo 8 caracteres"}})} />
            {errors.username && (
              <FormHelperText color="red">
                {errors.password.message}
              </FormHelperText>
            )}
          </FormControl>
          <FormControl w="80%">
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input placelholder="password" type={showPassword ? "text" : "password"} width="100%" {...register("password", {required: "Password tem que ter no mínimo 8 caracteres", minLength: { value: 8, message: "Password tem que ter no mínimo 8 caracteres"}})} />
              <InputRightElement>
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  bg="transparent"
                  icon={showPassword ? <BiHide /> : <BiShow />}
                />
              </InputRightElement>
            </InputGroup>
            {errors.username && (
              <FormHelperText color="red">
                {errors.password.message}
              </FormHelperText>
            )}
          </FormControl>
          <Button type="submit" colorScheme="green" width="80%">
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
