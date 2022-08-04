import {
  HStack,
  VStack,
  Stack,
  Heading,
  Text,
  Image,
  Button,
  Flex,
} from "@chakra-ui/react";
import "./styles/global.css";

import Card from "./components/card";
import Accordion from "./components/accordion";
import Input from "./components/input";
import LayoutComponent from "./components/LayoutComponent";
import { logos, questions } from "./utils";
import { useResponsive } from "./hooks";

function App() {
  const responsive = useResponsive();
  return (
    <LayoutComponent>
      {/* Home */}
      <Stack
        direction={responsive ? "column-reverse" : "row"}
        id="home"
        align="start"
        py={20}
      >
        <VStack
          spacing={5}
          w={responsive ? "100%" : "50%"}
          my={20}
          px={20}
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
          <Button colorScheme="green" size="lg">
            Eu quero
          </Button>
        </VStack>
        <VStack w={responsive ? "100%" : "50%"}>
          <Image boxSize="50%" src="/assets/containerimg.svg" />
        </VStack>
      </Stack>
      {/* Cards */}
      <VStack id="beneficies" py={10}>
        <Heading>Beneficios</Heading>
        <Stack
          direction={responsive ? "column" : "row"}
          colorScheme="green"
          justify="center"
          align="center"
          spacing={10}
          py={10}
        >
          <Card
            width={responsive ? "90%" : "20%"}
            title="title"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ex corrupti mollitia eos, debitis ipsam, facilis impedit eum "
          />
          <Card
            width={responsive ? "90%" : "20%"}
            title="title"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ex corrupti mollitia eos, debitis ipsam, facilis impedit eum "
          />
          <Card
            width={responsive ? "90%" : "20%"}
            title="title"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ex corrupti mollitia eos, debitis ipsam, facilis impedit eum "
          />
        </Stack>
      </VStack>

      {/* Serviços */}
      <VStack id="services">
        <Heading>Serviços</Heading>
        <Stack
          w="100%"
          justify="center"
          align={responsive && "center"}
          py={8}
          direction={responsive ? "column" : "row"}
        >
          <Image src="/assets/services.svg" boxSize="40%" />
          <Flex w={responsive ? "100%" : "50%"} wrap="wrap" px={10}>
            <Card
              width={responsive ? "90%" : "40%"}
              title="title"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ex corrupti mollitia eos, debitis ipsam, facilis impedit eum "
            />
            <Card
              width={responsive ? "90%" : "40%"}
              title="title"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ex corrupti mollitia eos, debitis ipsam, facilis impedit eum "
            />
            <Card
              width={responsive ? "90%" : "40%"}
              title="title"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ex corrupti mollitia eos, debitis ipsam, facilis impedit eum "
            />
            <Card
              width={responsive ? "90%" : "40%"}
              title="title"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ex corrupti mollitia eos, debitis ipsam, facilis impedit eum "
            />
          </Flex>
        </Stack>
      </VStack>
      {/* Perguntas */}
      <VStack id="questions" justify="center" w="100%" spacing={8} py={25}>
        <Heading>FAQ</Heading>
        <Accordion width={responsive ? "90%" : "50%"} data={questions} />
      </VStack>
      {/* Contato */}
      <VStack id="contact" spacing={8} py="50">
        <Heading>Contato</Heading>
        <VStack w="100%">
          <Input label="Nome" width={responsive ? "90%" : "50%" } />
          <Input label="Telefone" width={responsive ? "90%" : "50%" } />
          <Input label="Email" width={responsive ? "90%" : "50%" } />
          <Input label="Descrição" width={responsive ? "90%" : "50%" } textArea />
        </VStack>
      </VStack>
    </LayoutComponent>
  );
}

export default App;
