import { Heading, Text, VStack, Center } from "@chakra-ui/react";
import React from "react";

const Card = (props) => {
  const { title, text, width, key } = props;
  return (
    <VStack
      key={key}
      align="start"
      px={4}
      py={8}
      m={4}
      spacing={4}
      w={width}
      borderRadius="md"
      border="2px solid"
      borderColor="green.500"
    >
      <Heading>{title}</Heading>
      <Text>{text}</Text>
    </VStack>
  );
};

export default Card;
