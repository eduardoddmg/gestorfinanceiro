import { useToast } from "@chakra-ui/react";
import React from "react";

const toast = (props) => {
  const toastChakra = useToast();
  const { title, description, status, duration, isClosable } = props;
  console.log(props);
  return toastChakra({ title, description, status, duration, isClosable });
};

export default toast;
