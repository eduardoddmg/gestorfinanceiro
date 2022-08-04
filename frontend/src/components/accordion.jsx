import React from "react";
import {
  Accordion as AccordionChakra,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box
} from "@chakra-ui/react";

const Accordion = (props) => {
  const { data, width } = props;
  return (
    <AccordionChakra allowToggle w={width}>
      {data.map((item, index) => {
        return (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton py={4}>
                <Box flex="1" textAlign="left">
                  {item.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>{item.answer}</AccordionPanel>
          </AccordionItem>
        );
      })}
    </AccordionChakra>
  );
};

export default Accordion;
