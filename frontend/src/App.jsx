import {
  HStack,
  VStack,
  Stack,
  Heading,
  Text,
  Image,
  Button,
  Flex,
  Divider,
  Box,
} from "@chakra-ui/react";
import "./styles/global.css";
import { useMediaQuery } from "usehooks-ts";
import Card from "./components/card";
import Accordion from "./components/accordion";
import Input from "./components/input";
import LayoutComponent from "./components/LayoutComponent";
import { beneficies, services, questions } from "./utils";

function App() {
  const responsive = useMediaQuery("(max-width: 1000px)");

  return (
    <LayoutComponent>
      {/* Home */}
      <Stack
        direction={responsive ? "column-reverse" : "row"}
        align="center"
        justify="center"
        id="home"
        pt={responsive ? 5 : 30}
        pb={10}
      >
        <VStack
          spacing={5}
          w={responsive ? "100%" : "50%"}
          my={4}
          px={responsive ? 10 : "10%"}
          align="start"
          justify="end"
        >
          <Heading as="h1">Gestor Financeiro</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            commodi temporibus perferendis, magnam ipsa rem recusandae repellat,
            vero quasi eum blanditiis fugit assumenda. Ab dolorem porro
            necessitatibus unde, error soluta.
          </Text>
          <Button colorScheme="green" size="lg" className="btn">
            Eu quero
          </Button>
        </VStack>
        <VStack w={responsive ? "100%" : "50%"}>
          <Image boxSize={responsive ? "90%" : "50%"} src="/assets/containerimg.svg" />
        </VStack>
      </Stack>
      <Divider size={10} />
      {/* Cards */}
      <VStack id="beneficies" pt={20}>
        <Heading>Beneficios</Heading>
        <Flex
          direction={responsive ? "column" : "row"}
          colorScheme="green"
          justify="center"
          align="center"
          wrap="wrap"
          spacing={10}
          pt={10}
        >
          {beneficies.map((item, index) => (
              <Card
              key={index}
                width={responsive ? "90%" : "20%"}
                title={item.title}
                text={item.text}
              />
          ))}
        </Flex>
      </VStack>
      <Divider size={10} />

      {/* Serviços */}
      <VStack id="services" pt={20}>
        <Heading>Serviços</Heading>
        <Stack
          w="100%"
          justify="center"
          align={responsive && "center"}
          pt={8}
          direction={responsive ? "column" : "row"}
        >
          <Image src="/assets/services.svg" boxSize={responsive ? "90%" : "40%"} />
          <Flex
            w={responsive ? "100%" : "50%"}
            wrap="wrap"
            px={responsive ? "" : 10}
          >
            {services.map((item, index) => (
                <Card
                key={index}
                  width={responsive ? "90%" : "40%"}
                  title={item.title}
                  text={item.text}
                />
            ))}
          </Flex>
        </Stack>
      </VStack>
      <Divider size={10} />

      {/* Perguntas */}
      <VStack id="questions" justify="center" w="100%" spacing={8} pt={20}>
        <Heading>FAQ</Heading>
        <Accordion width={responsive ? "90%" : "50%"} data={questions} />
      </VStack>
      <Divider size={10} />

      {/* Contato */}
      <VStack id="contact" spacing={8} pt={20} pb={10}>
        <Heading>Contato</Heading>
        <VStack w="100%" spacing={5}>
          <Input label="Nome" width={responsive ? "90%" : "50%"} />
          <Input label="Telefone" width={responsive ? "90%" : "50%"} />
          <Input label="Email" width={responsive ? "90%" : "50%"} />
          <Input
            label="Descrição"
            width={responsive ? "90%" : "50%"}
            textArea
          />
          <Button w={responsive ? "90%" : "50%"} colorScheme="green">
            Enviar
          </Button>
        </VStack>
      </VStack>
    </LayoutComponent>
  );
}

export default App;
