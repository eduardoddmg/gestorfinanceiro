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
import { createTransaction, updateTransaction, deleteTransaction as deleteTransactionDB} from '../utils';
import { useMediaQuery } from 'usehooks-ts';

function TableChakra (props) {
  const { w, onOpen, setDataEdited, setTypeAction } = props;
  const { transactions, id, jwt, getTransactionId } = useContext(userContext);

  const sendData = (data) => {
    setDataEdited(data);
    setTypeAction("update");
    onOpen();
  };

  const deleteTransaction = async (idTransaction) => {
    const response = await deleteTransactionDB(idTransaction);
    response && getTransactionId(id.toString(), jwt);
  }

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
              const id = item._id;
              return (
              <Tr color="white" borderRadius="md" key={index} bg={item.typeTransaction === "entrada" ? "green.500" : "red.500"}>
                <Td>{item.nameItemTransaction}</Td>
                <Td>{item.typeTransaction}</Td>
                <Td>R$ {item.valueTransaction}</Td>
                <Td>
                  <Button colorScheme="whiteAlpha" variant="outline" onClick={() => sendData(item)}>Editar</Button>
                </Td>
                <Td>
                  <Button colorScheme="whiteAlpha" variant="outline" onClick={() => deleteTransaction(id)}>Delete</Button>
                </Td>
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
  const { onClose, dataEdited, typeAction } = props;
  const { id, getTransactionId, jwt } = useContext(userContext);

  const onSubmit = async (data) => {
      data.userId = id;
    if (typeAction === "create") {
      const resp = await createTransaction(data, jwt);
      resp.data && getTransactionId(data.userId.toString(), jwt);
    } else if (typeAction === "update") {
      data._id = dataEdited._id;
      const resp = await updateTransaction(data, jwt);
      resp.data && getTransactionId(data.userId.toString(), jwt);
    }
    onClose();
  };

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.item_name}>
        <FormLabel>Tipo de transação</FormLabel>
        <Select {...register("transacao_tipo")} defaultValue={dataEdited ? dataEdited.typeTransaction : "entrada"}>
          <option value="entrada">Entrada</option>
          <option value="saida">Saída</option>
        </Select>
      </FormControl>
      <FormControl isInvalid={errors.item_name}>
        <FormLabel>Nome do item</FormLabel>
        <Input {...register("item_name", {required: "O nome do item precisa ter no mínimo 5 caracteres", minLength: {value: 5, message: "O nome do item precisa ter no mínimo 5 caracteres"}})} defaultValue={dataEdited ? dataEdited.nameItemTransaction : ""} />
        {errors.item_name && (
              <FormHelperText color="red">
                {errors.item_name.message}
              </FormHelperText>
            )}
      </FormControl>
      <FormControl isInvalid={errors.item_value}>
        <FormLabel>Valor do item</FormLabel>
        <NumberInput defaultValue={dataEdited ? dataEdited.valueTransaction : 0}>
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
        <Input {...register("item_description", {required: "A descrição do item precisa ter no mínimo 5 caracteres", minLength: {value: 8, message: "A descrição do item precisa ter no mínimo 5 caracteres"}})} defaultValue={dataEdited ? dataEdited.descriptionItemTransaction : ""} />
        {errors.item_description && (
              <FormHelperText color="red">
                {errors.item_description.message}
              </FormHelperText>
            )}
      </FormControl>
      <Button type="submit" colorScheme="green" px={20} my={5}>Enviar</Button>
    </VStack>
  )
};

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [logged, setLogged] = useState(false);
  const [dataEdited, setDataEdited] = useState(null);
  const [typeAction, setTypeAction] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { user, transactions, Total, loginFirstRender } = useContext(userContext);
  const navigate = useNavigate();

  const responsive = useMediaQuery("(max-width: 1000px)");

  const isLogged = async () => {
    const response = await loginFirstRender();
    !response ? navigate("/") : setLoading(false);
    setLogged(response);
}

  useEffect(() => {
    isLogged();
  }, []);

  const openModal = () => {
    setDataEdited(null);
    setTypeAction("create");
    onOpen();
  }

  return (
    <LayoutComponent>
      {loading ? (
        <Center h="100vh">
          <Spinner color="green.500" size="xl" />
        </Center>
      ) : (
        <VStack spacing={5} minH="100vh" p={5} w={responsive ? "90%" : "60%"} mx="auto" align="start">
          <Modal onOpen={onOpen} isOpen={isOpen} onClose={onClose} title="Transação" content={<ModalForm onClose={onClose} dataEdited={dataEdited} typeAction={typeAction} />}  />
          <Button leftIcon={<AiOutlinePlusCircle fontSize={25} />} colorScheme="green" onClick={openModal}>Adicionar</Button>
          <Stack justify={responsive ? "center" : "space-between"} direction={responsive ? "column" : "row"} spacing={5} mt={10} w="full">
            <CardMoney width={responsive ? "90%" : "30%"} title="Receita" icon={<BsArrowUp fontSize={20} color="green" />} value={new Total().entradaCalc} />
            <CardMoney width={responsive ? "90%" : "30%"} title="Despesas" icon={<BsArrowDown fontSize={20} color="red" />} value={new Total().saidaCalc} />
            <CardMoney width={responsive ? "90%" : "30%"} title="Balanço" icon={<AiFillBank fontSize={20} />} value={new Total().entradaCalc - new Total().saidaCalc} />
          </Stack>
          <TableChakra w="full" onOpen={onOpen} onClose={onClose} setDataEdited={setDataEdited} setTypeAction={setTypeAction} />
        </VStack>
      )}
    </LayoutComponent>
  );
}
