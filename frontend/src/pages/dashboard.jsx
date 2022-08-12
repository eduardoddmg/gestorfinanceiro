import { Heading, Spinner, HStack, VStack, Center, Stack, Button, IconButton, useDisclosure, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { userContext } from "../context";
import { useContext, useEffect, useState, useCallback } from "react";
import LayoutComponent from "../components/LayoutComponent";
import CardMoney from "../components/cardMoney";
import Modal from "../components/modal";
import { useNavigate } from "react-router-dom";
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import { AiFillBank, AiOutlinePlusCircle } from 'react-icons/ai';



function ModalForm () {
  return (
    <VStack>
      <FormControl>
        <FormLabel>Nome do item</FormLabel>
        <Input />
      </FormControl>
      <FormControl>
        <FormLabel>Valor do item</FormLabel>
        <Input />
      </FormControl>
      <FormControl>
        <FormLabel>Descrição do item</FormLabel>
        <Input />
      </FormControl>
      <Button colorScheme="green" px={20} my={5}>Criar Item</Button>
    </VStack>
  )
};

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { user } = useContext(userContext);
  const navigate = useNavigate();

  useEffect(() => (!user ? navigate("/") : setLoading(false)), [user]);

  return (
    <LayoutComponent>
      {loading ? (
        <Center h="100vh">
          <Spinner color="green.500" size="xl" />
        </Center>
      ) : (
        <VStack spacing={5} minH="100vh" p={5} w="60%" mx="auto" align="start">
          <Modal onOpen={onOpen} isOpen={isOpen} onClose={onClose} title="Adicionar movimentação" content={<ModalForm />} />
          <HStack justify="space-between" spacing={5} mt={10} w="full">
            <CardMoney width="30%" title="Receita" icon={<BsArrowDown fontSize={20} />} />
            <CardMoney width="30%" title="Despesas" icon={<BsArrowUp fontSize={20} />} />
            <CardMoney width="30%" title="Balanço" icon={<AiFillBank fontSize={20} />}/>
          </HStack>
          <Button leftIcon={<AiOutlinePlusCircle fontSize={25} />} colorScheme="green" onClick={onOpen}>Adicionar</Button>
        </VStack>
      )}
    </LayoutComponent>
  );
}
