import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./utils/theme";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/route";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
