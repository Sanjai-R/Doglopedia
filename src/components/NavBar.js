import {
  Button,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isLogged, setIsLogged] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navItems = [
    {
      title: "Home",
      path: "/home",
    },
    {
      title: "Product",
      path: "/product",
    },
    {
      title: "Cart",
      path: "/cart",
    },
  ];
  useEffect(() => {
    const userData = localStorage.getItem("formData");
    if (JSON.parse(userData)) {
      setIsLogged(true);
    }
  }, []);

  const handleLogout = () => {
    onClose(); // Close the logout confirmation modal
    localStorage.clear("profile");
    window.location.reload();
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      bg="#fff"
      px="10"
      py="2"
      w="100%"
    >
      <Heading fontWeight="800" fontSize="xl">
        E-commerce
      </Heading>

      <Flex gap={2} alignItems="center">
        {navItems.map((item, i) => (
          <Link to={item.path} key={item.title}>
            <Button variant="ghost">{item.title}</Button>
          </Link>
        ))}
      </Flex>
      {isLogged ? (
        <>
          <Button onClick={onOpen}>Logout</Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Logout Confirmation</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>Are you sure you want to logout?</Text>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="brand" mr={3} onClick={handleLogout}>
                  Logout
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      ) : (
        <Flex gap={2}>
          <Link to={"/"}>
            <Button colorScheme="brand">Login</Button>
          </Link>
        </Flex>
      )}
    </Flex>
  );
};
export default NavBar;
