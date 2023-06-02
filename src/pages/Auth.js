import {
  Box,
  Center,
  Flex,
  FormControl,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import LoginContainer from "../containers/Login";

const Auth = () => {
  return (
    <Flex
      w="100%"
      bg="gray.100"
      h="100vh"
      flexDirection={("column-reverse", "flex")}
    >
      <Box
        flex="1"
        backgroundPosition="center"
        backgroundImage="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
      ></Box>
      <Center flex="1">
        <LoginContainer />
      </Center>
    </Flex>
  );
};

export default Auth;
