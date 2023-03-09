import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, Text } from "@chakra-ui/react";
import { theme } from "../src/utils/theme";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./utils/Context";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <Text
          width="100px"
          height="100px"
          position="absolute"
          left="50%"
          top="50%"
          marginLeft="-50px"
          marginTop="-50px"
          fontSize="20px"
        >
          Loading...
        </Text>
      }
    >
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <GlobalProvider>
            <ChakraProvider theme={theme}>
              <App />
            </ChakraProvider>
          </GlobalProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();
