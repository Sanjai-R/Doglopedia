import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React from "react";

const LoginContainer = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const toast = useToast();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    localStorage.setItem("formData", JSON.stringify(formData));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    toast({
      title: "Account created.",
      description: "We've created your account for you",
      status: "success",
      position: "top-right",
    });

    setFormData({
      email: "",
      password: "",
    });
  };
  return (
    <Box boxShadow="md" p="3" w="lg" bg="#fff" borderRadius="md">
      <Heading textAlign="center" fontWeight="bold">
        Login
      </Heading>

      <form onSubmit={handleSubmit} autoComplete="off">
        <VStack align="stretch" mt="2" spacing="2">
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input
              type="text"
              value={formData.email}
              name="email"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={formData.password}
              name="password"
              onChange={handleChange}
            />
          </FormControl>
        </VStack>
        <Button type="submit" w="full" mt="2" colorScheme="brand">
          Register
        </Button>
      </form>
    </Box>
  );
};

export default LoginContainer;
