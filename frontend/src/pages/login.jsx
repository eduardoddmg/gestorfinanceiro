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
  FormHelperText,
  useToast
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
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const onSubmit = async (data) => {
    setLoading(true);
    const response = await loginUser(data);
    const status = response.status || response.response.status;
    const userData = response.data || response.response.data;
    userData && setLoading(false);
    if (status === 200) login(data.username, userData.id.toString(), userData.token);
    if (status === 200) navigate('/dashboard');
      return toast({
        title: userData.data ? "Usuário logado": "Aconteceu alguma coisa",
        description: userData.message,
        status: status === 200 ? "success": "error",
        duration: 3000,
        isClosable: true,
        position: "bottom-right",
      })
  };

  return (
    <LayoutComponent>
      <HStack justify="center" align="center" minH="100vh">
       {!responsive && <VStack w="40%" py={20} h="80vh">
          <Image src="/assets/login.svg" alt="login" boxSize="80%" my={10} />
        </VStack>}
        <VStack as="form" onSubmit={handleSubmit(onSubmit)} spacing={5} mb={10} w={responsive ? "90%":"40%"} h="80vh" justify="center">
          <Heading>Login</Heading>
          <FormControl w="80%" isInvalid={errors.username}>
            <FormLabel>Username</FormLabel>
            <Input placelholder="username" width="100%" {...register("username", {required: "Username tem que ter no mínimo 8 caracteres", minLength: { value: 8, message: "Username tem que ter no mínimo 8 caracteres"}})} />
            {errors.username && (
              <FormHelperText color="red">
                {errors.username.message}
              </FormHelperText>
            )}
          </FormControl>
          <FormControl w="80%" isInvalid={errors.password}>
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
            {errors.password && (
              <FormHelperText color="red">
                {errors.password.message}
              </FormHelperText>
            )}
          </FormControl>
          <Button  py={4} isLoading={loading} type="submit" colorScheme="green" width="80%">
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
