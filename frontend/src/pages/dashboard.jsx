import { Heading, Spinner, HStack, VStack, Center, Stack, Button, IconButton, useDisclosure, FormControl, FormLabel, Input, InputGroup, FormHelperText, NumberInput, NumberInputField, Select,   Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer } from "@chakra-ui/react";
import { userContext } from "../context";
import { useContext, useEffect, useState, useCallback } from "react";
import LayoutComponent from "../components/LayoutComponent";
import CardMoney from "../components/cardMoney";
import Modal from "../components/modal";
import { useNavigate } from "react-router-dom";
import { BsArrowDown, BsArrowUp, BsCurrencyDollar } from 'react-icons/bs';
import { AiFillBank, AiOutlinePlusCircle } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { createTransaction } from '../utils';
import { useMediaQuery } from 'usehooks-ts';

function TableChakra (props) {
  const { w } = props;
  const { transactions } = useContext(userContext);

  return (
    <TableContainer w={w}>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Tipo da transação</Th>
            <Th>Valor</Th>
          </Tr>
        </Thead>
        <Tbody>
          {transactions && transactions.map((item, index) => {
              return (
              <Tr borderRadius="md" key={index} bg={item.typeTransaction === "entrada" ? "green.300" : "red.300"}>
                <Td>{item.nameItemTransaction}</Td>
                <Td>{item.typeTransaction}</Td>
                <Td>R$ {item.valueTransaction}</Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

function ModalForm (props) {
  const { register, handleSubmit, setValue, getValues, formState: { errors }} = useForm();
  const { onClose } = props;
  const { id, addTransaction } = useContext(userContext);

  const onSubmit = async (data) => {
    data.idUser = id;
    const resp = await createTransaction(data);
    console.log(resp.data);
    addTransaction(resp.data.data);
    onClose();
  };

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.item_name}>
        <FormLabel>Tipo de transação</FormLabel>
        <Select {...register("transacao_tipo")}>
          <option value="entrada" selected>Entrada</option>
          <option value="saida">Saída</option>
        </Select>
      </FormControl>
      <FormControl isInvalid={errors.item_name}>
        <FormLabel>Nome do item</FormLabel>
        <Input {...register("item_name", {required: "O nome do item precisa ter no mínimo 5 caracteres", minLength: {value: 5, message: "O nome do item precisa ter no mínimo 5 caracteres"}})} />
        {errors.item_name && (
              <FormHelperText color="red">
                {errors.item_name.message}
              </FormHelperText>
            )}
      </FormControl>
      <FormControl isInvalid={errors.item_value}>
        <FormLabel>Valor do item</FormLabel>
        <NumberInput defaultValue={0}>
          <NumberInputField {...register("item_value", {setValueAs: v => parseInt(v),required: "O valor mínimo do item é $ 1.00", min: {value: 1, message: "O valor mínimo do item é $ 1.00"}})} />
        </NumberInput>
        {errors.item_value && (
              <FormHelperText color="red">
                {errors.item_value.message}
              </FormHelperText>
            )}
      </FormControl>
      <FormControl isInvalid={errors.item_description}>
        <FormLabel>Descrição do item</FormLabel>
        <Input {...register("item_description", {required: "A descrição do item precisa ter no mínimo 5 caracteres", minLength: {value: 8, message: "A descrição do item precisa ter no mínimo 5 caracteres"}})} />
        {errors.item_description && (
              <FormHelperText color="red">
                {errors.item_description.message}
              </FormHelperText>
            )}
      </FormControl>
      <Button type="submit" colorScheme="green" px={20} my={5}>Criar Item</Button>
    </VStack>
  )
};

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { user, transactions, Total, loadingServer } = useContext(userContext);
  const navigate = useNavigate();

  const responsive = useMediaQuery("(max-width: 1000px)");
  useCallback(() => (!user ? navigate("/") : setLoading(false)), [loadingServer]);

  return (
    <LayoutComponent>
      {loading && !loadingServer ? (
        <Center h="100vh">
          <Spinner color="green.500" size="xl" />
        </Center>
      ) : (
        <VStack spacing={5} minH="100vh" p={5} w={responsive ? "90%" : "60%"} mx="auto" align="start">
          <Modal onOpen={onOpen} isOpen={isOpen} onClose={onClose} title="Adicionar movimentação" content={<ModalForm onClose={onClose} />} />
          <Button leftIcon={<AiOutlinePlusCircle fontSize={25} />} colorScheme="green" onClick={onOpen}>Adicionar</Button>
          <Stack justify={responsive ? "center" : "space-between"} direction={responsive ? "column" : "row"} spacing={5} mt={10} w="full">
            <CardMoney width={responsive ? "90%" : "30%"} title="Receita" icon={<BsArrowUp fontSize={20} color="green" />} value={new Total().entradaCalc} />
            <CardMoney width={responsive ? "90%" : "30%"} title="Despesas" icon={<BsArrowDown fontSize={20} color="red" />} value={new Total().saidaCalc} />
            <CardMoney width={responsive ? "90%" : "30%"} title="Balanço" icon={<AiFillBank fontSize={20} />} value={new Total().entradaCalc - new Total().saidaCalc} />
          </Stack>
          <TableChakra w="full" />
        </VStack>
      )}
    </LayoutComponent>
  );
}
