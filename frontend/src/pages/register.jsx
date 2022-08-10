import {
  Heading,
  HStack,
  Image,
  Button,
  VStack,
  Stack,
  Text,
  Link as LinkChakra,
  FormControl,
  Input,
  FormLabel,
  InputGroup,
  InputRightElement,
  IconButton,
  FormHelperText
} from "@chakra-ui/react";
import React, { useState } from "react";
import LayoutComponent from "../components/LayoutComponent";
import { Link } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";
import { BiShow, BiHide } from "react-icons/bi";

import { useForm } from "react-hook-form";
import { registerUser, regexEmail } from '../utils';
import validator from 'validator';

const Register = () => {
  const responsive = useMediaQuery("(max-width: 1000px)");
  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const onSubmit = (data) => {
    if (data.password != data.re_password) {
      setError('password', {type: 'custom', message: 'As senhas precisa ser igual'});
      setError('re_password', {type: 'custom', message: 'As senhas precisa ser igual'});
    }
    else registerUser(data);
  };
  return (
    <LayoutComponent>
      <HStack justify="center" align="center">
        <VStack
          as="form"
          w="50%"
          onSubmit={handleSubmit(onSubmit)}
          justify="center"
        >
          <Heading>Register</Heading>
          <FormControl w="80%" isInvalid={errors.username}>
            <FormLabel>Username</FormLabel>
            <Input
              placeholder="username"
              width="100%"
              {...register("username", { required: 'Usuário precisa ter no mínimo 8 caracteres', minLength: {
                value: 8, message: 'Usuário precisa ter no mínimo 8 caracteres'} })}
            />
            {errors.username && <FormHelperText color="red">{errors.username.message}</FormHelperText>}
          </FormControl>
          <FormControl w="80%" isInvalid={errors.email}>
            <FormLabel>Email</FormLabel>
            <Input placeholder="email" width="100%" {...register("email", { required: {
              value: true, message: 'Email inválido'}, pattern: {
              value: regexEmail,
              message: 'Email inválido'
            } })} />
            {errors.email && <FormHelperText color="red">{errors.email.message}</FormHelperText>}
          </FormControl>
          <FormControl w="80%" isInvalid={errors.password}>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                placeholder="password"
                width="100%"
                type={showPassword ? "text" : "password"}
                {...register("password", { required: 'A senha precisa ter no mínimo 8 caracteres', minLength: {
                  value: 8, message: 'A senha precisa ter no mínimo 8 caracteres'} })}
              />
              <InputRightElement>
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  bg="transparent"
                  icon={showPassword ? <BiHide /> : <BiShow />}
                />
              </InputRightElement>
            </InputGroup>
            {errors.password && <FormHelperText color="red">{errors.password.message}</FormHelperText>}
          </FormControl>
          <FormControl w="80%" isInvalid={errors.re_password}>
            <FormLabel>Re-Password</FormLabel>
            <InputGroup>
              <Input
                placeholder="re-password"
                width="100%"
                type={showRePassword ? "text" : "password"}
                {...register("re_password", { required: 'A senha precisa ter no mínimo 8 caracteres', minLength: {
                  value: 8,
                  message: 'A senha precisa ter no mínimo 8 caracteres'
                }})}
              />
              <InputRightElement>
                <IconButton
                  onClick={() => setShowRePassword(!showRePassword)}
                  bg="transparent"
                  icon={showRePassword ? <BiHide /> : <BiShow />}
                />
              </InputRightElement>
            </InputGroup>
            {errors.re_password && <FormHelperText color="red">{errors.re_password.message}</FormHelperText>}
          </FormControl>
          <Button type="submit" colorScheme="green" width="80%">
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
        {!responsive && (
          <VStack w="40%" py={20} h="80vh">
            <Image src="/assets/login.svg" alt="login" boxSize="80%" my={10} />
          </VStack>
        )}
      </HStack>
    </LayoutComponent>
  );
};

export default Register;
