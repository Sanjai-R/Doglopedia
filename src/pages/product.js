import React from "react";
import useFetch from "../hooks/useFetch";
import {
  Button,
  ButtonGroup,
  Box,
  Center,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
  Card,
  CardBody,
  CardFooter,
  SimpleGrid,
  Flex,
  Input,
  Container,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Product = () => {
  const { loading, data } = useFetch("https://fakestoreapi.com/products");

  return (
    <Box>
      <Container maxW="7xl" bg="gray.50" p="4">
        <Flex gap="3" mb="3" flex="6">
          <Input bg="#fff" flex="5" placeholder="Search Items"></Input>
          <Button flex="1" colorScheme="brand">
            Search
          </Button>
        </Flex>
        {loading ? (
          <Box textAlign="center">
            <Heading>Loading...</Heading>
          </Box>
        ) : data.length > 0 ? (
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing="4">
            {data.map((item, index) => {
              if (item.title.length > 0) {
                return (
                  <Card maxW="sm" key={index}>
                    <CardBody>
                      <Center>
                        <Image
                          src={item.image}
                          alt={item.title}
                          borderRadius="lg"
                          boxSize={{ base: "150px", md: "200px" }}
                        />
                      </Center>
                      <Stack mt="6" spacing="3">
                        <Heading size="md" textAlign="center">
                          {item.title.slice(14).toUpperCase()}
                        </Heading>
                      </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                      <Button
                        w="full"
                        variant="solid"
                        colorScheme="brand"
                        to={`/product/${item.id}`}
                        as={Link}
                      >
                        View Details
                      </Button>
                      
                    </CardFooter>
                  </Card>
                );
              } else {
                return null;
              }
            })}
          </SimpleGrid>
        ) : (
          <Box textAlign="center" mt="4">
            <Heading>No Data</Heading>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Product;
