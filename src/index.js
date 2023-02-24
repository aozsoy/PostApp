import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../src/utils/theme";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./utils/fetch";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalProvider>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
