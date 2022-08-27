import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Poppins, system-ui, sans-serif",
    heading: "Poppins, system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
