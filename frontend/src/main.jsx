import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Router from "./router";
import { UseAuth } from './context'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <UseAuth>
        <Router />
      </UseAuth>
    </ChakraProvider>
  </React.StrictMode>
);
