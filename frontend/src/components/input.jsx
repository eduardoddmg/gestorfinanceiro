import { Input as InputChakra, Stack, Textarea } from "@chakra-ui/react";
import React from "react";

const Input = (props) => {
  const { label, placeholder, width, textArea, ...restOfProps } = props;
  return (
    <Stack align="left" width={width}>
      <label>{label}</label>
      {textArea ? (
        <Textarea
          focusBorderColor="green.500"
          placeholder={placeholder}
          {...restOfProps}
        />
      ) : (
        <InputChakra
          as="input"
          focusBorderColor="green.500"
          colorScheme="green"
          placeholder={placeholder}
          {...restOfProps}
        />
      )}
    </Stack>
  );
};

export default Input;
