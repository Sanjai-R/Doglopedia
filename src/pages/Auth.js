import { Center } from "@chakra-ui/react";
import React from "react";
import LoginContainer from "./containers/Login";

const Auth = () => {
  return (
    <Center h="100vh" bg="gray.50">
      <LoginContainer />
    </Center>
  );
};

export default Auth;
